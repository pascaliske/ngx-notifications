import { InjectionToken } from '@angular/core'
import { NotificationType } from './notification'

export const OPTIONS = new InjectionToken<ModuleOptions>('options')

export interface ModuleOptions {
    labels?: { [key in NotificationType]?: string }
    markdown?: (src: string) => string
}
