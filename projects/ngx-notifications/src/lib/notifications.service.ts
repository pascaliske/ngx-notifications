import { Injectable } from '@angular/core'
import { NotificationsQueue } from './notifications.queue'
import { Notification } from './notification'
import { NotificationOptions } from './typings'

@Injectable()
export class NotificationsService {
    public constructor(private queue: NotificationsQueue) {}

    /**
     * Sends an info notification.
     *
     * @param message
     * @param options
     */
    public info(message: string, options?: NotificationOptions): Notification {
        return this.queue.add(new Notification('info', message, options))
    }

    /**
     * Send a success notification.
     *
     * @param message
     * @param options
     */
    public success(message: string, options?: NotificationOptions): Notification {
        return this.queue.add(new Notification('success', message, options))
    }

    /**
     * Sends a warning notification.
     *
     * @param message
     * @param options
     */
    public warning(message: string, options?: NotificationOptions): Notification {
        return this.queue.add(new Notification('warning', message, options))
    }

    /**
     * Sends an error notification.
     *
     * @param message
     * @param options
     */
    public error(message: string, options?: NotificationOptions): Notification {
        return this.queue.add(new Notification('error', message, options))
    }
}
