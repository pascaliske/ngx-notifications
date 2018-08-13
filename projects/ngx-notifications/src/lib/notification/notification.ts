import { Subject, Subscription, interval } from 'rxjs'
import { first } from 'rxjs/operators'
import { v4 } from 'uuid'
import { NotificationType, NotificationOptions } from '../typings'

export class Notification {
    /**
     * Unique id.
     *
     * @param message
     */
    public readonly uid: string = v4()

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
     * Triggers a dismiss.
     *
     * @param close$
     */
    public close$: Subject<void> = new Subject()

    /**
     * Dismissed state.
     *
     * @param dismissed
     */
    private dismissed: boolean = false

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
        timeout: 3000,
        dismissOnClick: true,
    }

    /**
     * Bootstraps a notification and starts the timer.
     *
     * @param type
     * @param message
     * @param options
     */
    public constructor(type: NotificationType, message: string, options?: NotificationOptions) {
        this.type = type
        this.message = message
        this.options = this.prepare(options)

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
        if (this.dismissed) {
            return
        }

        if (this.timeout) {
            this.timeout.unsubscribe()
        }

        this.close$.next()
        this.close$.complete()
        this.dismissed = true
    }

    /**
     * Merges the given options with the defaults.
     *
     * @param options
     */
    private prepare(options: NotificationOptions = {}): NotificationOptions {
        return { ...this.defaults, ...options }
    }
}
