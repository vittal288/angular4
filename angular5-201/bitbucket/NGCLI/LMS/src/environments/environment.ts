// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  googleAPIUrl: 'https://www.googleapis.com',
  localJSONUrl: 'assets/json-data/',
  firebase: {
    apiKey: 'AIzaSyDmjopNoSsPRyDasoqvE4g_m88BeVzw7hc',
    authDomain: 'anytime-library-ea43e.firebaseapp.com',
    databaseURL: 'https://anytime-library-ea43e.firebaseio.com',
    projectId: 'anytime-library-ea43e',
    storageBucket: '',
    messagingSenderId: '441111898629'
  }
};
