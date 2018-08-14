import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsComponent } from './notifications.component'
import { NotificationComponent } from './notification.component'
import { NotificationsQueue } from './notifications.queue'
import { NotificationsService } from './notifications.service'

@NgModule({
    imports: [CommonModule],
    declarations: [NotificationsComponent, NotificationComponent],
    exports: [NotificationsComponent],
    providers: [
        {
            provide: NotificationsQueue,
            useClass: NotificationsQueue,
        },
    ],
})
export class NotificationsModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotificationsModule,
            providers: [NotificationsService],
        }
    }
}
