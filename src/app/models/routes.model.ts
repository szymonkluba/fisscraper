export interface RouteInterface {
  path: string;
  label: string;
  routerPath: string;
}

export const routerPaths = {
  SCRAPER: {
    path: 'scraper',
    label: 'Scraper',
    routerPath: 'scraper',
  },
  ARCHIVE: {
    path: 'archive',
    label: 'Archive',
    routerPath: 'archive',
  },
  SINGLE_RACE: {
    path: 'scraper/single-race',
    label: 'Single race',
    routerPath: 'single-race'
  }
}

