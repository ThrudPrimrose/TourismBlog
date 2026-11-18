# TourismBlog

Tour site for Nino & Murat Tours, built with Angular 22, CoreUI 5, and ngx-translate (EN, RU, TR). Content is loaded from
Contentful.

Requires Node.js 22.22.3, 24.15, or 26 and newer. Set the Contentful credentials as environment variables (or in a `.env` file)
before building or serving:

```
NG_APP_SPACE=<space id>
NG_APP_ACCESS_TOKEN=<content delivery API token>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests with [Vitest](https://vitest.dev).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
