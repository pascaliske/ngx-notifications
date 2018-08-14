# `@pascaliske/ngx-notifications`

[![Build Status](https://travis-ci.com/pascaliske/ngx-notifications.svg?branch=master)](https://travis-ci.com/pascaliske/ngx-notifications) [![Greenkeeper badge](https://badges.greenkeeper.io/pascaliske/ngx-notifications.svg)](https://greenkeeper.io/)

## Installation

To install the module use the following command:

```bash
$ yarn add @pascaliske/ngx-notifications
```

## Usage

1. Import the module into your `AppModule`:

    ```typescript
    import { NgModule } from '@angular/core'
    import { BrowserModule } from '@angular/platform-browser'
    import { NotificationsModule } from '@pascaliske/ngx-notifications'
    import { AppComponent } from './app.component'

    @NgModule({
        bootstrap: [AppComponent],
        declarations: [AppComponent],
        imports: [BrowserModule, NotificationsModule.forRoot()],
        providers: [],
    })
    export class AppModule {}
    ```

2. Add the following line to your app's template:

    ```html
    <cmp-notifications></cmp-notifications>
    ```

3. Access the `NotificationsService` in your components:

    ```typescript
    import { Component, OnInit } from '@angular/core'
    import { NotificationsService } from '@pascaliske/ngx-notifications'

    @Component({
        selector: 'cmp-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    })
    export class AppComponent implements OnInit {
        public constructor(private notificationService: NotificationsService) {}

        public ngOnInit(): void {
            this.notificationService.info('Hello World!')
        }
    }
    ```

4. Style the notifications with your own styles:

    ```scss
    .cmp-notifications {
        // the notifications list
    }

    .cmp-notification {
        // a single notification

        &--info {
            // info styles
        }

        &--success {
            // success styles
        }

        &--warning {
            // warning styles
        }

        &--error {
            // error styles
        }
    }
    ```

## License

MIT © [Pascal Iske](https://pascal-iske.de)
