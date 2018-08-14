import { Component, Input, ViewEncapsulation } from '@angular/core'
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
     * Dismisses the notification on click if enabled.
     */
    public dismiss(): void {
        if (!this.data.options.clickable) {
            return
        }

        this.data.dismiss()
    }
}
