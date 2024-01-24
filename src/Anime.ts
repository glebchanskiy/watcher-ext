export type DayOfWeek  = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export interface Anime {
 title: string
 dayOfWeek: DayOfWeek
 description?: string
}