// API Request Types
export type Level = 'beginner' | 'intermediate' | 'advanced'
export type PreferFormat = 'mix' | 'video' | 'blog' | 'document'

export interface ItineraryRequest {
  concept: string
  level: Level
  days: number
  hours_per_day: number
  prefer_format: PreferFormat
  free_only: boolean
}

// API Response Types
export type FreeLabel = 'FREE_FULL' | 'FREE_PARTIAL' | 'PAID'
export type ContentType = 'blog' | 'video' | 'document' | 'website'

export interface ItineraryItem {
  title: string
  url: string
  content_type: ContentType
  minutes: number
  why: string
  free_label: FreeLabel
  free_evidence: string
}

export interface DayItinerary {
  day: number
  objective: string
  items: ItineraryItem[]
}

export interface ItineraryResponse {
  concept: string
  level: Level
  days: number
  project: string
  itinerary: DayItinerary[]
}

// API Error Types
export interface ValidationErrorDetail {
  loc: (string | number)[]
  msg: string
  type: string
}

export interface ValidationErrorResponse {
  detail: ValidationErrorDetail[]
}

