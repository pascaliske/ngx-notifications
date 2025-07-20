import type { ApplicationConfig } from '@angular/core'
import { provideZonelessChangeDetection } from '@angular/core'
import { provideNotifications } from '@pascaliske/ngx-notifications'
import { parse } from 'marked'

export function markdown(src: string): string {
    return parse(src, { gfm: true, async: false })
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideNotifications({
            markdown,
            labels: {
                info: 'INFO',
                error: 'ERROR',
            },
        }),
    ],
}
