# `@pascaliske/ngx-notifications`

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/ngx-notifications.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/ngx-notifications) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/ngx-notifications.svg?style=flat-square)](https://github.com/pascaliske/ngx-notifications) [![Build Status](https://img.shields.io/github/workflow/status/pascaliske/ngx-notifications/Test%20package/master?label=test&style=flat-square)](https://github.com/pascaliske/ngx-notifications/actions) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

## Installation

To install the module use the following command:

```bash
$ ng add @pascaliske/ngx-notifications
```

## Usage

1. Import the `provideNotifications()` function in your application configuration file.:

    ```typescript
    import type { ApplicationConfig } from '@angular/core'
    import { provideNotifications } from '@pascaliske/ngx-notifications'

    export const appConfig: ApplicationConfig = {
        providers: [
            provideExperimentalZonelessChangeDetection(),
            provideNotifications(),
        ],
    }
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

MIT © [Pascal Iske](https://pascaliske.dev)
