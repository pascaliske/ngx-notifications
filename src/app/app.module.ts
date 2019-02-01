import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { parse } from 'marked'
import { AppComponent } from './app.component'

@NgModule({
    imports: [
        BrowserModule,
        NotificationsModule.forRoot({
            labels: {
                info: 'INFO',
                error: 'ERROR',
            },
            markdown: (src: string) => parse(src, { gfm: true }),
        }),
    ],
    bootstrap: [AppComponent],
    declarations: [AppComponent],
})
export class AppModule {}
