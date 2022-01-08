export const environment = {
  production: true,
  dropbox: {
    apiKey: process.env["DROPBOX_API_KEY"],
    listEntriesURL: "https://api.dropboxapi.com/2/files/list_folder",
    downloadFile: "https://content.dropboxapi.com/2/files/download",
    downloadZip: "https://content.dropboxapi.com/2/files/download_zip",
  },
  scraperApi: {
    scrapRaceURL: "https://fis-scraper-api.herokuapp.com/scrap_race/",
  }
};
