import { Component, Input, ViewEncapsulation } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { Notification } from './notification'

@Component({
    selector: 'cmp-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent {
    /**
     * The notification to visualize.
     */
    @Input()
    public data: Notification

    public constructor() {}

    /**
     * Triggers a dismiss event.
     */
    public dismiss(): void {
        if (!this.data.options.dismissable) {
            return
        }

        // trigger dismiss
        this.data.dismissed$.next()
        this.data.dismissed$.complete()
    }

    /**
     * Triggers a click event.
     *
     * @param event
     */
    public click(event): void {
        if (!this.data.options.clickable) {
            return
        }

        // trigger click
        this.data.clicked$.next(event)

        // auto dismiss on click if enabled
        if (this.data.options.dismissOnClick) {
            this.data.clicked$.complete()
            this.data.dismissed$.next()
            this.data.dismissed$.complete()
        }
    }

    /**
     * Returns the components classes based on the given conditions.
     */
    public get classes(): string {
        return modifiers('cmp-notification', {
            [this.data.type]: true,
            clickable: this.data.options.clickable,
            dismissable: this.data.options.dismissable,
            timeout: this.data.options.timeout > 0,
        })
    }
}
