export interface RouteInterface {
  path?: string;
  label?: string;
  routerPath: RouterPaths;
  action?: () => void;
  icon?: string;
  link: Paths;
}

export enum Paths {
  EMPTY,
  SCRAPER,
  ARCHIVE,
  SINGLE_RACE,
  MULTI_RACE,
  RANGE_RACE,
  RAW_DATA,
  SCRAP_TABLE,
}

export enum RouterPaths {
  EMPTY = '',
  SCRAPER = 'scraper',
  ARCHIVE = 'archive',
}

export const routerPaths = {
  [Paths.SCRAPER]: {
    path: '/' + RouterPaths.SCRAPER,
    label: 'Scraper',
    routerPath: RouterPaths.SCRAPER,
    link: Paths.SCRAPER,
  },
  [Paths.ARCHIVE]: {
    path: '/' + RouterPaths.ARCHIVE,
    label: 'Archive',
    routerPath: RouterPaths.ARCHIVE,
    link: Paths.ARCHIVE,
  },
  [Paths.SINGLE_RACE]: {
    path: '/' + RouterPaths.SCRAPER,
    label: 'Single race',
    routerPath: RouterPaths.SCRAPER,
    link: Paths.SINGLE_RACE,
  },
  [Paths.MULTI_RACE]: {
    path: '/' + RouterPaths.SCRAPER,
    label: 'Multiple races',
    routerPath: RouterPaths.SCRAPER,
    link: Paths.MULTI_RACE,
  },
  [Paths.RANGE_RACE]: {
    path: '/' + RouterPaths.SCRAPER,
    label: 'Range of races',
    routerPath: RouterPaths.SCRAPER,
    link: Paths.RANGE_RACE,
  },
  [Paths.RAW_DATA]: {
    path: '/' + RouterPaths.SCRAPER,
    label: 'Raw data',
    routerPath: RouterPaths.SCRAPER,
    link: Paths.RAW_DATA,
  },
  [Paths.SCRAP_TABLE]: {
    path: '/' + RouterPaths.SCRAPER,
    label: 'Scrap table',
    routerPath: RouterPaths.SCRAPER,
    link: Paths.SCRAP_TABLE,
  },
};
