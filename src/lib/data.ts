import raw from '../../data/processed/evidence.json';
export const evidence: any = raw;
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '') => `${base}/${path}`;
export const source = (id: string) => evidence.sources.find((s: any) => s.id === id);
export const admins = ['Clinton','George W. Bush','Obama','Trump I','Biden','Trump II'];
export const periods = ['1993–2001','2001–2009','2009–2017','2017–2021','2021–2025','2025–Oct 19, 2026'];
export const display = (value: any) => value === null || value === undefined ? 'No data' : typeof value === 'number' ? value.toLocaleString('en-US',{maximumFractionDigits:2}) : String(value);
