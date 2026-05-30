export const header = $state({
  title: 'Interflux',
  crumbs: [],
  backPath: '/',
  visible: true,
  shownMenu: 'none',
  theme: 'blue'
});

export interface HeaderProps {
  title?: string;
  crumbs?: string[];
  backPath?: string;
  shown?: boolean;
  shownMenu?: string;
  theme?: string;
}
