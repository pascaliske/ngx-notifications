import { InjectionToken } from '@angular/core'
import { NotificationType } from './notification'

export const OPTIONS = new InjectionToken<NotificationsOptions>('options')

export interface NotificationsOptions {
    labels?: { [key in NotificationType]?: string }
    markdown?: (src: string) => string
}
