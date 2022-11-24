export interface RouteInterface {
  path?: string;
  label?: string;
  routerPath: string;
}

export const routerPaths = {
  EMPTY: {
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
};
