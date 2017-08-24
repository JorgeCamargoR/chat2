// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
  	apiKey: 'AIzaSyBhefffXxskolbkMe9KjoBoHgx3LFRf6xQ',
    authDomain: 'firechat22aug.firebaseapp.com',
    databaseURL: 'https://firechat22aug.firebaseio.com',
    projectId: 'firechat22aug',
    storageBucket: 'firechat22aug.appspot.com',
    messagingSenderId: '944362836941'
  }
};
