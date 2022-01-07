export interface RouteInterface {
  path: string;
  label: string;
  routerPath: string;
}

export const routerPaths = {
  EMPTY: {
    path: '',
    label: '',
    routerPath: '',
  },
  SCRAPER: {
    path: '/scraper',
    label: 'Scraper',
    routerPath: 'scraper',
  },
  ARCHIVE: {
    path: '/archive',
    label: 'Archive',
    routerPath: 'archive',
  },
  SINGLE_RACE: {
    path: '/scraper/single-race',
    label: 'Single race',
    routerPath: 'single-race'
  },
  MULTI_RACES: {
    path: '/scraper/multi-races',
    label: 'Multiple races',
    routerPath: 'multi-races'
  },
  RANGE_RACES: {
    path: '/scraper/range-races',
    label: 'Range of races',
    routerPath: 'range-races'
  }
}

