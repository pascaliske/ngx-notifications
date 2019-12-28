import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { parse } from 'marked'
import { AppComponent } from './app.component'

export function markdown(src: string): string {
    return parse(src, { gfm: true })
}

@NgModule({
    imports: [
        BrowserModule,
        NotificationsModule.forRoot({
            markdown,
            labels: {
                info: 'INFO',
                error: 'ERROR',
            },
        }),
    ],
    bootstrap: [AppComponent],
    declarations: [AppComponent],
})
export class AppModule {}
