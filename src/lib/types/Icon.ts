const AVAILABLE_ICONS = ['email'] as const;

export { AVAILABLE_ICONS };

export type Icon = (typeof AVAILABLE_ICONS)[number];
