import { Component, Input, ViewEncapsulation } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { Notification } from './notification'

@Component({
    selector: 'cmp-notification',
    templateUrl: './notification.component.html',
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

        this.data.dismiss()
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

        this.data.clicked$.next(event)
    }

    /**
     * Returns the components classes based on the given conditions.
     */
    public get classes(): string {
        return modifiers('cmp-notification', {
            [this.data.type]: true,
            clickable: this.data.options.clickable,
            timeout: this.data.options.timeout > 0,
        })
    }
}
