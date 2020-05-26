import { Component } from '@angular/core'
import { NotificationsQueue } from './notifications.queue'

@Component({
    selector: 'cmp-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
    public constructor(public queue: NotificationsQueue) {}
}
