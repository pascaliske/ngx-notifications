import { Injectable, Inject } from '@angular/core'
import { ModuleOptions, OPTIONS } from './tokens'
import { NotificationsQueue } from './notifications.queue'
import { Notification, NotificationType, NotificationOptions } from './notification'

@Injectable({
    providedIn: 'root',
})
export class NotificationsService {
    public constructor(
        @Inject(OPTIONS) private options: ModuleOptions,
        private queue: NotificationsQueue,
    ) {}

    /**
     * Sends an info {@link Notification}.
     *
     * @param - The message to display
     * @param - Optional options for the notification
     */
    public info(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.queue.add(this.create('info', message, options))
    }

    /**
     * Send a success {@link Notification}.
     *
     * @param - The message to display
     * @param - Optional options for the notification
     */
    public success(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.queue.add(this.create('success', message, options))
    }

    /**
     * Sends a warning {@link Notification}.
     *
     * @param - The message to display
     * @param - Optional options for the notification
     */
    public warning(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.queue.add(this.create('warning', message, options))
    }

    /**
     * Sends an error {@link Notification}.
     *
     * @param - The message to display
     * @param - Optional options for the notification
     */
    public error(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.queue.add(this.create('error', message, options))
    }

    /**
     * Creates a new {@link Notification}
     *
     * @param - The {@link NotificationType}
     * @param - The message to display
     * @param - Optional options for the notification
     * @returns - Returns the notification instance
     */
    private create(
        type: NotificationType,
        message: string,
        options?: Partial<NotificationOptions>,
    ): Notification {
        // use custom markdown parser if set
        if (this.options && this.options.markdown) {
            message = this.options.markdown(message)
        }

        return new Notification(type, message, options)
    }
}
