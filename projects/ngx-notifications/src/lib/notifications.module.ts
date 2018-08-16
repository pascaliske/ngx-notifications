import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsComponent } from './notifications.component'
import { NotificationComponent } from './notification.component'
import { NotificationsQueue } from './notifications.queue'
import { NotificationsService } from './notifications.service'

@NgModule({
    imports: [CommonModule],
    declarations: [NotificationsComponent, NotificationComponent],
    exports: [NotificationsComponent],
    providers: [NotificationsService, NotificationsQueue],
})
export class NotificationsModule {}
