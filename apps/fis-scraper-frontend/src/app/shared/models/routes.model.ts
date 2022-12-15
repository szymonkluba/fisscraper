export interface RouteInterface {
  path?: string;
  label?: string;
  routerPath: RouterPath;
  action?: () => void;
  icon?: string;
  link: Destination;
}

export enum Destination {
  EMPTY,
  SCRAPER,
  ARCHIVE,
  SINGLE_RACE,
  MULTI_RACE,
  RANGE_RACE,
  RAW_DATA,
  SCRAP_TABLE,
}

export enum RouterPath {
  EMPTY = '',
  SCRAPER = 'scraper',
  ARCHIVE = 'archive',
}

export const routerPaths = {
  [Destination.SCRAPER]: {
    path: '/' + RouterPath.SCRAPER,
    label: 'Scraper',
    routerPath: RouterPath.SCRAPER,
    link: Destination.SCRAPER,
  },
  [Destination.ARCHIVE]: {
    path: '/' + RouterPath.ARCHIVE,
    label: 'Archive',
    routerPath: RouterPath.ARCHIVE,
    link: Destination.ARCHIVE,
  },
  [Destination.SINGLE_RACE]: {
    path: '/' + RouterPath.SCRAPER,
    label: 'Single race',
    routerPath: RouterPath.SCRAPER,
    link: Destination.SINGLE_RACE,
  },
  [Destination.MULTI_RACE]: {
    path: '/' + RouterPath.SCRAPER,
    label: 'Multiple races',
    routerPath: RouterPath.SCRAPER,
    link: Destination.MULTI_RACE,
  },
  [Destination.RANGE_RACE]: {
    path: '/' + RouterPath.SCRAPER,
    label: 'Range of races',
    routerPath: RouterPath.SCRAPER,
    link: Destination.RANGE_RACE,
  },
  [Destination.RAW_DATA]: {
    path: '/' + RouterPath.SCRAPER,
    label: 'Raw data',
    routerPath: RouterPath.SCRAPER,
    link: Destination.RAW_DATA,
  },
  [Destination.SCRAP_TABLE]: {
    path: '/' + RouterPath.SCRAPER,
    label: 'Scrap table',
    routerPath: RouterPath.SCRAPER,
    link: Destination.SCRAP_TABLE,
  },
};
