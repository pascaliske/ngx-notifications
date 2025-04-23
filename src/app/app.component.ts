import { Component } from '@angular/core'
import type { NotificationOptions } from '@pascaliske/ngx-notifications'
import { NotificationsComponent, NotificationsService } from '@pascaliske/ngx-notifications'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    imports: [NotificationsComponent],
})
export class AppComponent {
    public constructor(private notificationService: NotificationsService) {}

    public create(): void {
        const type = ['info', 'warning', 'success', 'error'][Math.floor(Math.random() * 4)]
        const options: NotificationOptions = {
            timeout: 0,
            clickable: Math.random() >= 0.5,
            dismissable: Math.random() >= 0.5,
            dismissOnClick: Math.random() >= 0.5,
        }

        const message = `random options: ${JSON.stringify(options)}`
        const notification = this.notificationService[type](message, options)

        notification.clicked$.subscribe(event => {
            console.log('==> clicked', notification, event)
        })

        notification.dismissed$.subscribe(() => {
            console.log('==> dismissed', notification)
        })
    }
}
