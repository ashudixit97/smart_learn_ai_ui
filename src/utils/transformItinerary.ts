import type { ItineraryResponse, DayItinerary as ApiDayItinerary } from '../types/itinerary'

/**
 * Transform API response to UI-friendly format
 */
export interface DisplayItineraryItem {
  id: number
  title: string
  url: string
  contentType: string
  minutes: number
  why: string
  freeLabel: string
}

export interface DisplayDayItinerary {
  day: number
  objective: string
  items: DisplayItineraryItem[]
}

export interface DisplayItinerary {
  concept: string
  level: string
  days: number
  project: string
  itinerary: DisplayDayItinerary[]
}

export const transformItineraryResponse = (
  response: ItineraryResponse
): DisplayItinerary => {
  return {
    concept: response.concept,
    level: response.level,
    days: response.days,
    project: response.project,
    itinerary: response.itinerary.map((day: ApiDayItinerary) => ({
      day: day.day,
      objective: day.objective,
      items: day.items.map((item, index) => ({
        id: index + 1,
        title: item.title,
        url: item.url,
        contentType: item.content_type,
        minutes: item.minutes,
        why: item.why,
        freeLabel: item.free_label,
      })),
    })),
  }
}
