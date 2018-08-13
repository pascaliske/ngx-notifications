import { Component, Input, ViewEncapsulation } from '@angular/core'
import { Notification } from './notification'

@Component({
    selector: 'cmp-notification',
    templateUrl: './notification.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent {
    @Input()
    public data: Notification

    public constructor() {}

    /**
     * Dismiss the notification on click.
     */
    public dismiss(): void {
        if (this.data.options.dismissOnClick) {
            this.data.dismiss()
        }
    }
}
