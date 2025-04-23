import {
    Component,
    ViewEncapsulation,
    Input,
    Inject,
    HostListener,
    HostBinding,
} from '@angular/core'
import { NgIf } from '@angular/common'
import { modifiers } from '@pascaliske/html-helpers'
import { NotificationsOptions, OPTIONS } from './tokens'
import { Notification } from './notification'

@Component({
    selector: 'cmp-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [NgIf],
})
export class NotificationComponent {
    /**
     * The notification to visualize.
     */
    @Input()
    public data: Notification

    public constructor(@Inject(OPTIONS) private options: NotificationsOptions) {}

    /**
     * Triggers a dismiss event.
     */
    public dismiss(): void {
        if (!this.data?.options?.dismissable) {
            return
        }

        // trigger dismiss
        this.data.dismissed$.next()
        this.data.dismissed$.complete()
        this.data.clicked$.complete()
    }

    /**
     * Triggers a click event.
     *
     * @param - The click event
     */
    @HostListener('click', ['$event'])
    public click(event: MouseEvent): void {
        if (!this.data?.options?.clickable) {
            return
        }

        // trigger click
        this.data.clicked$.next(event)

        // auto dismiss on click if enabled
        if (this.data?.options?.dismissOnClick) {
            this.data.dismissed$.next()
            this.data.dismissed$.complete()
            this.data.clicked$.complete()
        }
    }

    /**
     * Binds the uid to the component.
     */
    @HostBinding('id')
    public get id(): string {
        return this.data.uid
    }

    /**
     * Binds the components classes based on the given conditions.
     */
    @HostBinding('class')
    public get classes(): string {
        return modifiers('cmp-notification', {
            [this.data.type]: true,
            clickable: this.data?.options?.clickable,
            dismissable: this.data?.options?.dismissable,
            timeout: this.data?.options?.timeout > 0,
        })
    }

    /**
     * Returns the label for the notification type.
     */
    public get label(): string {
        return this.options?.labels?.[this.data?.type] ?? this.data?.type
    }

    /**
     * Sets an a11y aria label with the notifications message.
     */
    @HostBinding('attr.aria-label')
    public get message(): string {
        return this.data?.message ?? ''
    }

    /**
     * Sets an role attribute for a11y purposes.
     */
    @HostBinding('attr.role')
    public get role(): string {
        return 'alertdialog'
    }
}
