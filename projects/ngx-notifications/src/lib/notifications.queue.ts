import { Notification } from './notification/notification'
import { first } from 'rxjs/operators'

export class NotificationsQueue {
    /**
     * Stores all active notifications.
     *
     * @param notifications
     */
    public items: Array<Notification> = []

    public constructor() {}

    /**
     * Pushes a new notification into the store.
     *
     * @param notification
     */
    public add(notification: Notification): Notification {
        this.items.push(notification)

        notification.close$.pipe(first()).subscribe(() => {
            this.remove(notification)
        })

        return notification
    }

    /**
     * Dismisses the given notification.
     *
     * @param notification
     */
    public remove(notification: Notification): void {
        this.items = this.items.filter(item => item.uid !== notification.uid)
    }
}
