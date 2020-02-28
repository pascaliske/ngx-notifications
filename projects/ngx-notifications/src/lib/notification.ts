import { Subject, Subscription, interval } from 'rxjs'
import { first } from 'rxjs/operators'
import { v4 as uuid } from 'uuid'

export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface NotificationOptions {
    timeout: number
    clickable: boolean
    dismissable: boolean
    dismissOnClick: boolean
}

export class Notification {
    /**
     * Unique id.
     *
     * @param uid
     */
    public readonly uid: string = uuid()

    /**
     * User entered notification type.
     *
     * @param type
     */
    public type: NotificationType

    /**
     * User entered notification message.
     *
     * @param message
     */
    public message: string

    /**
     * User entered notification options.
     *
     * @param options
     */
    public options: NotificationOptions

    /**
     * Triggered if notification was dismissed.
     *
     * @param dismissed$
     */
    public dismissed$: Subject<void> = new Subject()

    /**
     * Triggered if notification was clicked.
     *
     * @param clicked$
     */
    public clicked$: Subject<MouseEvent> = new Subject()

    /**
     * Timeout subscriotion for late unsubscribing.
     *
     * @param timeout
     */
    private timeout: Subscription

    /**
     * Option defaults.
     *
     * @param defaults
     */
    private readonly defaults: NotificationOptions = {
        timeout: 5000,
        clickable: true,
        dismissable: true,
        dismissOnClick: false,
    }

    /**
     * Bootstraps a notification and starts the timer.
     *
     * @param - The {@link NotificationType}
     * @param - The notification message
     * @param - Optional options for the notification
     */
    public constructor(
        type: NotificationType,
        message: string,
        options?: Partial<NotificationOptions>,
    ) {
        this.type = type
        this.message = message
        this.options = {
            ...this.defaults,
            ...options,
        }

        if (this.options.timeout > 0) {
            this.timeout = interval(this.options.timeout)
                .pipe(first())
                .subscribe(() => {
                    this.dismiss()
                })
        }
    }

    /**
     * Dismiss the notification.
     */
    public dismiss(): void {
        if (!this.options.dismissable) {
            return
        }

        if (this.timeout && !this.timeout.closed) {
            this.timeout.unsubscribe()
        }

        this.dismissed$.next()
        this.dismissed$.complete()
    }
}
