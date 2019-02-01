import { Component, Inject, Input, ViewEncapsulation } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { ModuleOptions, OPTIONS } from './tokens'
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

    public constructor(@Inject(OPTIONS) private options: ModuleOptions) {}

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
     * @param - The click event
     */
    public click(event: MouseEvent): void {
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
     * Returns the label for the notification type.
     */
    public get label(): string {
        if (this.options && this.options.labels && this.options.labels[this.data.type]) {
            return this.options.labels[this.data.type]
        }

        return this.data.type
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
