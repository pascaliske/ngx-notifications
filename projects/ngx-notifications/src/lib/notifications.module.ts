import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsComponent } from './notifications.component'
import { NotificationComponent } from './notification.component'
import { NotificationsOptions, OPTIONS } from './tokens'

@NgModule({
    imports: [CommonModule],
    declarations: [NotificationsComponent, NotificationComponent],
    exports: [NotificationsComponent],
})
export class NotificationsModule {
    /**
     * Allows the configuration of the module.
     *
     * @param - The module options
     * @returns - The module with all providers
     */
    public static forRoot(
        options?: NotificationsOptions,
    ): ModuleWithProviders<NotificationsModule> {
        return {
            ngModule: NotificationsModule,
            providers: [
                {
                    provide: OPTIONS,
                    useValue: options,
                },
            ],
        }
    }
}
