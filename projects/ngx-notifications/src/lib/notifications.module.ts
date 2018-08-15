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
    providers: [],
})
export class NotificationsModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotificationsModule,
            providers: [
                {
                    provide: NotificationsService,
                    useClass: NotificationsService,
                },
                {
                    provide: NotificationsQueue,
                    useClass: NotificationsQueue,
                },
            ],
        }
    }
}
