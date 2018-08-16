import { Component } from '@angular/core'
import { NotificationsService, NotificationOptions } from '@pascaliske/ngx-notifications'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    private types = ['info', 'warning', 'success', 'error']

    public constructor(private notificationService: NotificationsService) {}

    public trigger(): void {
        const type = this.types[Math.floor(Math.random() * 4)]
        const options: NotificationOptions = {
            timeout: 0,
            clickable: Math.random() >= 0.5,
            dismissable: Math.random() >= 0.5,
            dismissOnClick: Math.random() >= 0.5,
        }

        const notification = this.notificationService[type](
            `random options: ${JSON.stringify(options)}`,
            options,
        )

        notification.clicked$.subscribe(event => {
            console.log('==> clicked', event)
        })

        notification.dismissed$.subscribe(() => {
            console.log('==> dismissed')
        })
    }
}
