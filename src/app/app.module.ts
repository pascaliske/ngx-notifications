import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { AppComponent } from './app.component'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, NotificationsModule],
    providers: [],
})
export class AppModule {}
