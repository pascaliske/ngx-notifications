import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsComponent } from './notifications.component'
import { NotificationComponent } from './notification.component'
import { NotificationsQueue } from './notifications.queue'
import { NotificationsService } from './notifications.service'
import { ModuleOptions } from './typings'

@NgModule({
    imports: [CommonModule],
    declarations: [NotificationsComponent, NotificationComponent],
    exports: [NotificationsComponent],
    providers: [],
})
export class NotificationsModule {
    private static readonly defaults: ModuleOptions = {}

    /**
     * Initializes the NotificationsModule and provides access to the service.
     *
     * @param options
     */
    public static forRoot(options?: Partial<ModuleOptions>): ModuleWithProviders {
        // merge options with defaults
        options = { ...this.defaults, ...options }

        // return with providers
        return {
            ngModule: NotificationsModule,
            providers: [
                {
                    provide: 'options',
                    useValue: options,
                },
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
