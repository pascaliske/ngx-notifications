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
        this.notificationService.info('Hello World!', {
            timeout: 0,
        })
    }
}
