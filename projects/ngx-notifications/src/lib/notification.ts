import { Subject, Subscription, interval } from 'rxjs'
import { first } from 'rxjs/operators'
import { v4 } from 'uuid'
import { parse, MarkedOptions } from 'marked'
import { NotificationType, NotificationOptions } from './typings'

export class Notification {
    /**
     * Unique id.
     *
     * @param uid
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
     * @param dismissed$
     */
    public dismissed$: Subject<void> = new Subject()

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
        timeout: 5000,
        clickable: true,
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
        this.message = this.renderMarkdown(message)
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
        if (this.dismissed) {
            return
        }

        if (this.timeout) {
            this.timeout.unsubscribe()
        }

        this.dismissed$.next()
        this.dismissed$.complete()
        this.dismissed = true
    }

    /**
     * Renders the message from markdown to html.
     *
     * @param message
     */
    private renderMarkdown(message: string): string {
        const options: MarkedOptions = {
            gfm: true,
        }

        return parse(message, options)
    }
}
