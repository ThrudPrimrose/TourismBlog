// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const _contentfulConfig = {
  space: 'iuul3pb05b1r',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '18SHPu2TxGe7osUbFecxtuoFZhaEzIRMIhM-8P2CCos'
}

export const environment = {
  production: false,
  APIEndpoint: 'http://127.0.0.1:5000/',
  contentfulConfig: _contentfulConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
