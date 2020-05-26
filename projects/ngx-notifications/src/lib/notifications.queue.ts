import { Injectable } from '@angular/core'
import { first } from 'rxjs/operators'
import { Notification } from './notification'

@Injectable({
    providedIn: 'root',
})
export class NotificationsQueue {
    /**
     * Stores all active notifications.
     *
     * @param items
     */
    public items: Notification[] = []

    /**
     * Pushes a new notification into the store.
     *
     * @param notification
     */
    public add(notification: Notification): Notification {
        this.items.push(notification)

        notification.dismissed$.pipe(first()).subscribe(() => {
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
