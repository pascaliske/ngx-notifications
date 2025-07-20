import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { NotificationsOptions, OPTIONS } from './tokens'

export const provideNotifications = (options?: NotificationsOptions): EnvironmentProviders => {
    return makeEnvironmentProviders([
        {
            provide: OPTIONS,
            useValue: options ?? {},
        },
    ])
}
