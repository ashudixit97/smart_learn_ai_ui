import type {
  ItineraryRequest,
  ItineraryResponse,
  ValidationErrorResponse
} from '../types/itinerary'

const API_BASE_URL = 'http://127.0.0.1:8000/v1'

/**
 * Custom API Error class
 */
export class ItineraryApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public details?: ValidationErrorResponse['detail']
  ) {
    super(message)
    this.name = 'ItineraryApiError'
  }
}

/**
 * Transform validation error response to user-friendly message
 */
const transformValidationError = (error: ValidationErrorResponse): string => {
  if (!error.detail || error.detail.length === 0) {
    return 'Validation error occurred'
  }

  const messages = error.detail.map((detail) => {
    const field = detail.loc.join('.')
    return `${field}: ${detail.msg}`
  })

  return messages.join('\n')
}

/**
 * Fetch itinerary from the API
 */
export const fetchItinerary = async (
  request: ItineraryRequest
): Promise<ItineraryResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/itinerary`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    const data = await response.json()

    if (!response.ok) {
      // Handle validation errors (400 status)
      if (response.status === 400 || response.status === 422) {
        const validationError = data as ValidationErrorResponse
        throw new ItineraryApiError(
          transformValidationError(validationError),
          response.status,
          validationError.detail
        )
      }

      // Handle other errors
      throw new ItineraryApiError(
        data.message || `API Error: ${response.statusText}`,
        response.status
      )
    }

    return data as ItineraryResponse
  } catch (error) {
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new ItineraryApiError(
        'Network error: Unable to connect to the API server. Please ensure the server is running on http://127.0.0.1:8000'
      )
    }

    // Re-throw ItineraryApiError instances
    if (error instanceof ItineraryApiError) {
      throw error
    }

    // Handle unknown errors
    throw new ItineraryApiError(
      error instanceof Error ? error.message : 'An unknown error occurred'
    )
  }
}
