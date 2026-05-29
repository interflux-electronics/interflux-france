const AVAILABLE_ICONS = ['email-1', 'email-2','phone', 'marker-1', 'marker-2', 'marker-shadow', 'search'] as const;

export { AVAILABLE_ICONS };

export type Icon = (typeof AVAILABLE_ICONS)[number];
