import { Component } from '@angular/core'
import { NotificationsService } from '@pascaliske/ngx-notifications'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public constructor(private notificationService: NotificationsService) {}

    public trigger(): void {
        const notification = this.notificationService.info('Hello World!', {
            timeout: 0,
            clickable: false,
            dismissable: true,
        })

        notification.clicked$.subscribe(event => {
            console.log('==> clicked', event)
        })

        notification.dismissed$.subscribe(() => {
            console.log('==> dismissed')
        })
    }
}
