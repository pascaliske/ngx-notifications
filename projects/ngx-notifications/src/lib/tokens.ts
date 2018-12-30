import { InjectionToken } from '@angular/core'

export const OPTIONS = new InjectionToken<ModuleOptions>('options')

export interface ModuleOptions {
    markdown?: (src: string) => string
}
