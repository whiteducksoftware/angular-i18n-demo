# Angular i18n demo

This project is accompanying our blogpost on [Angular internationalization (i18n) in 2022](). It demonstrates how to use the native Angular i18n library to translate your application at runtime. For more information see the blogpost.

## How to run it

Navigate into the `./runtime-translations` folder and run `npm install` to install the required dependencies.
Then run `npm run start` to start the app in development mode.

## How to use it

This demo implements runtime translations for the `en` and `de` languages. Click on the `en` or `de` button in the navbar to switch the language. It should translate the route label in the navbar and the app title displayed in the center.

## How is it structured

- The `i18n.module.ts` located in `./src/app/core/i18n/i18n.module.ts` applies the selected language at application start-up and is the main component required for runtime translations.
- The translation files are located in `./src/assets/i18n/` and are named `en.json` and `de.json`.
- The language switch and storage of the selected language is done in the `app-component.ts` located in `./src/app/app-module.ts`.
