import { Component } from '@angular/core'
import { NgFor } from '@angular/common'
import { NotificationsQueue } from './notifications.queue'
import { NotificationComponent } from './notification.component'

@Component({
    selector: 'cmp-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    imports: [NgFor, NotificationComponent],
})
export class NotificationsComponent {
    public constructor(public queue: NotificationsQueue) {}
}
