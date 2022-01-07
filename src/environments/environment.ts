// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dropbox: {
    apiKey: "uMHq35uknPEAAAAAAAAAAdpMjglMdLfjL4SHuEqm_16A_KCLvN2sH8pycwpQyAWI",
    listEntriesURL: "https://api.dropboxapi.com/2/files/list_folder",
    downloadFile: "https://content.dropboxapi.com/2/files/download",
    downloadZip: "https://content.dropboxapi.com/2/files/download_zip",
  },
  scraperApi: {
    scrapRaceURL: "http://127.0.0.1:8000/scrap_race/",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
