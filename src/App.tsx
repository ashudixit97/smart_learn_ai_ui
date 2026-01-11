import { useState } from 'react'
import './App.css'
import ItineraryForm from './components/ItineraryForm'
import { fetchItinerary, ItineraryApiError } from './services/api'
import { transformItineraryResponse, type DisplayItinerary } from './utils/transformItinerary'
import { mockItineraryResponse } from './data/mockItinerary'
import type { ItineraryRequest, ContentType } from './types/itinerary'

function App() {
  const [isSearching, setIsSearching] = useState(false)
  const [itinerary, setItinerary] = useState<DisplayItinerary | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFormSubmit = async (request: ItineraryRequest) => {
    setIsSearching(true)
    setItinerary(null)
    setError(null)

    try {
      const response = await fetchItinerary(request)
      const transformedItinerary = transformItineraryResponse(response)
      setItinerary(transformedItinerary)
    } catch (err) {
      console.error('Error fetching itinerary:', err)
      
      // Show error message but display mock data as fallback
      if (err instanceof ItineraryApiError) {
        setError(`API Error: ${err.message}. Showing sample itinerary below.`)
      } else {
        setError('Unable to connect to API. Showing sample itinerary below.')
      }
      
      // Transform and set mock data as fallback
      const mockTransformed = transformItineraryResponse(mockItineraryResponse)
      setItinerary(mockTransformed)
    } finally {
      setIsSearching(false)
    }
  }

  const getContentTypeIcon = (contentType: ContentType): string => {
    switch (contentType) {
      case 'blog':
        return '📝'
      case 'video':
        return '🎥'
      case 'document':
        return '📄'
      case 'website':
        return '🌐'
      default:
        return '🔗'
    }
  }

  const formatMinutes = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes} min`
    }
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  const getFreeLabelBadge = (freeLabel: string): string => {
    switch (freeLabel) {
      case 'FREE_FULL':
        return '🟢 Free'
      case 'FREE_PARTIAL':
        return '🟡 Partially Free'
      case 'PAID':
        return '🔴 Paid'
      default:
        return ''
    }
  }

  return (
    <div className="app-container">
      <div className="chatbot-container">
        <h1 className="title">Itinerary Planner</h1>
        
        <ItineraryForm onSubmit={handleFormSubmit} isLoading={isSearching} />

        {isSearching && (
          <div className="progress-container">
            <div className="progress-spinner"></div>
            <p className="progress-text">Generating itinerary...</p>
          </div>
        )}

        {error && !isSearching && (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <div className="error-content">
              <h3 className="error-title">Error</h3>
              <p className="error-message">{error}</p>
            </div>
          </div>
        )}

        {itinerary && !isSearching && (
          <div className="itinerary-container">
            <div className="itinerary-header">
              <h2 className="itinerary-destination">{itinerary.concept}</h2>
              <div className="itinerary-meta">
                <span className="itinerary-level">{itinerary.level}</span>
                <span className="itinerary-duration">{itinerary.days} Days</span>
              </div>
            </div>

            {itinerary.project && (
              <div className="project-info">
                <strong>Project:</strong> {itinerary.project}
              </div>
            )}

            {itinerary.itinerary.map((day) => (
              <div key={day.day} className="day-itinerary">
                <div className="day-header">
                  <h3 className="day-title">Day {day.day}</h3>
                  <p className="day-subtitle">{day.objective}</p>
                </div>

                <div className="resources-section">
                  <h4 className="section-title">Learning Resources</h4>
                  <div className="resources-grid">
                    {day.items.map((item) => (
                      <div key={item.id} className="resource-card">
                        <div className="resource-icon">
                          {getContentTypeIcon(item.contentType as ContentType)}
                        </div>
                        <div className="resource-content">
                          <div className="resource-header">
                            <h5 className="resource-title">{item.title}</h5>
                            <span className="resource-free-badge">
                              {getFreeLabelBadge(item.freeLabel)}
                            </span>
                          </div>
                          <div className="resource-meta">
                            <span className="resource-duration">
                              ⏱️ {formatMinutes(item.minutes)}
                            </span>
                            <span className="resource-type">
                              {item.contentType}
                            </span>
                          </div>
                          <p className="resource-description">{item.why}</p>
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="resource-link"
                          >
                            View Resource →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
