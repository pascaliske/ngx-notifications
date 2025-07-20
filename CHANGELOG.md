## [3.0.1](https://github.com/pascaliske/ngx-notifications/compare/v3.0.0...v3.0.1) (2025-07-20)


### Bug Fixes

* **deps:** update dependency uuid to v11 ([47bc285](https://github.com/pascaliske/ngx-notifications/commit/47bc285))
* make notification options optional ([f7100d3](https://github.com/pascaliske/ngx-notifications/commit/f7100d3))


### Features

* upgrade angular to v20 ([d7816fd](https://github.com/pascaliske/ngx-notifications/commit/d7816fd))



# [3.0.0](https://github.com/pascaliske/ngx-notifications/compare/v2.1.3...v3.0.0) (2025-04-23)


### Bug Fixes

* **deps:** update dependency uuid to v9 ([b7499eb](https://github.com/pascaliske/ngx-notifications/commit/b7499ebee4246edaefc6b470369067cd8ee2b89b))
* **deps:** update dependency zone.js to ~0.12.0 ([ee2d4d6](https://github.com/pascaliske/ngx-notifications/commit/ee2d4d63fa12b2d0f8e6eb0d02857035795f8a96))
* **deps:** update dependency zone.js to ~0.13.0 ([6a35388](https://github.com/pascaliske/ngx-notifications/commit/6a353889d20a161817a6c9950c994684708ebc96))


### Features

* migrate to a provider function based library ([7163979](https://github.com/pascaliske/ngx-notifications/commit/71639799b3f349f9c260ff9fc242e1cbad45f229))
* rename options token in preparation for provider based library ([7a67964](https://github.com/pascaliske/ngx-notifications/commit/7a679646cb3f6ac066b81c1ed41bcac719a2b6ba))
* upgrade angular to v19 ([64bfeb2](https://github.com/pascaliske/ngx-notifications/commit/64bfeb2f2074b055e8dab8870f519c28a441abf9))


### BREAKING CHANGES

* The bootstrap process of this library changed from a
module based one to a provider function based one. Replace calls to
`NotificationsModule.forRoot()` with `provideNotifications()`.
* In preparation for a standalone compatible library the
options token interface was renamed from `ModuleOptions` to
`NotificationsOptions`.



## [2.1.3](https://github.com/pascaliske/ngx-notifications/compare/v2.1.2...v2.1.3) (2022-05-27)



## [2.1.2](https://github.com/pascaliske/ngx-notifications/compare/v2.1.1...v2.1.2) (2022-05-27)



## [2.1.1](https://github.com/pascaliske/ngx-notifications/compare/v2.1.0...v2.1.1) (2022-05-27)



# [2.1.0](https://github.com/pascaliske/ngx-notifications/compare/v2.0.2...v2.1.0) (2022-02-15)



## [2.0.2](https://github.com/pascaliske/ngx-notifications/compare/v2.0.1...v2.0.2) (2021-05-25)



## [2.0.1](https://github.com/pascaliske/ngx-notifications/compare/v2.0.0...v2.0.1) (2021-05-03)


### Bug Fixes

* **schematics:** fix typing issue ([aceeafa](https://github.com/pascaliske/ngx-notifications/commit/aceeafa87ab3122f4a40e9ae97969e99c603f2bf))



# [2.0.0](https://github.com/pascaliske/ngx-notifications/compare/v1.5.2...v2.0.0) (2021-05-03)



## [1.5.2](https://github.com/pascaliske/ngx-notifications/compare/v1.5.1...v1.5.2) (2020-07-25)



## [1.5.1](https://github.com/pascaliske/ngx-notifications/compare/v1.5.0...v1.5.1) (2020-07-25)



# [1.5.0](https://github.com/pascaliske/ngx-notifications/compare/v1.4.3...v1.5.0) (2020-07-25)


### Features

* upgrade angular to v10 ([8c62c36](https://github.com/pascaliske/ngx-notifications/commit/8c62c365e4a21fc719d4287bc579cb6101eac890))



## [1.4.3](https://github.com/pascaliske/ngx-notifications/compare/v1.4.2...v1.4.3) (2020-05-26)



## [1.4.2](https://github.com/pascaliske/ngx-notifications/compare/v1.4.1...v1.4.2) (2020-03-24)



## [1.4.1](https://github.com/pascaliske/ngx-notifications/compare/v1.4.0...v1.4.1) (2020-02-28)



# [1.4.0](https://github.com/pascaliske/ngx-notifications/compare/v1.3.2...v1.4.0) (2019-12-28)


### Features

* add ng-add schematics for easier installation ([f17b75e](https://github.com/pascaliske/ngx-notifications/commit/f17b75e141e015847d29ecaada455463117099fd))
* upgrade angular to v9 ([ea3a3d5](https://github.com/pascaliske/ngx-notifications/commit/ea3a3d5ec308d02131ac682e71895fdbd05e1def))



## [1.3.2](https://github.com/pascaliske/ngx-notifications/compare/v1.3.1...v1.3.2) (2019-06-28)



## [1.3.1](https://github.com/pascaliske/ngx-notifications/compare/v1.3.0...v1.3.1) (2019-06-18)



# [1.3.0](https://github.com/pascaliske/ngx-notifications/compare/v1.2.0...v1.3.0) (2019-06-10)


### Bug Fixes

* **package:** update core-js to version 3.0.0 ([cad0930](https://github.com/pascaliske/ngx-notifications/commit/cad0930))


### Features

* compatibility update for angular v8 ([a05bc5f](https://github.com/pascaliske/ngx-notifications/commit/a05bc5f))
* compatibility update for angular v8 ([314f406](https://github.com/pascaliske/ngx-notifications/commit/314f406))



# [1.2.0](https://github.com/pascaliske/ngx-notifications/compare/v1.1.0...v1.2.0) (2019-02-01)


### Features

* **notification:** allow displaying custom labels for notification types ([133f252](https://github.com/pascaliske/ngx-notifications/commit/133f252))




