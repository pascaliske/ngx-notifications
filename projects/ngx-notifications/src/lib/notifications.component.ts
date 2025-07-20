import { Component } from '@angular/core'
import { NotificationsQueue } from './notifications.queue'
import { NotificationComponent } from './notification.component'

@Component({
    selector: 'cmp-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    imports: [NotificationComponent],
})
export class NotificationsComponent {
    public constructor(public queue: NotificationsQueue) {}
}
