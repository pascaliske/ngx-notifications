import type { ApplicationConfig } from '@angular/core'
import { importProvidersFrom } from '@angular/core'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { parse } from 'marked'

export function markdown(src: string): Promise<string> | string {
    return parse(src, { gfm: true })
}

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            NotificationsModule.forRoot({
                markdown,
                labels: {
                    info: 'INFO',
                    error: 'ERROR',
                },
            }),
        ),
    ],
}
