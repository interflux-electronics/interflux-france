const AVAILABLE_ICONS = [
  'email-1',
  'email-2',
  'hamburger',
  'marker-1',
  'marker-2',
  'marker-shadow',
  'phone',
  'primary-interflux-france-logo',
  'search'
] as const;

export { AVAILABLE_ICONS };

export type Icon = (typeof AVAILABLE_ICONS)[number];
