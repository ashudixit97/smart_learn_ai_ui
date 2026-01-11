import React from 'react'
import type { ItineraryRequest } from '../types/itinerary'
import './ItineraryForm.css'

interface ItineraryFormProps {
  onSubmit: (request: ItineraryRequest) => void
  isLoading: boolean
}

export default function ItineraryForm({ onSubmit, isLoading }: ItineraryFormProps) {
  const [formData, setFormData] = React.useState<ItineraryRequest>({
    concept: '',
    level: 'beginner',
    days: 7,
    hours_per_day: 2,
    prefer_format: 'mix',
    free_only: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.concept.trim()) {
      onSubmit(formData)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'number'
          ? parseInt(value, 10)
          : type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }))
  }

  return (
    <form className="itinerary-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="concept">Concept/Topic *</label>
        <input
          type="text"
          id="concept"
          name="concept"
          value={formData.concept}
          onChange={handleChange}
          placeholder="e.g., Learn React, Python Basics, etc."
          required
          disabled={isLoading}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="level">Level</label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            disabled={isLoading}
            className="form-select"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="days">Days</label>
          <input
            type="number"
            id="days"
            name="days"
            value={formData.days}
            onChange={handleChange}
            min="1"
            max="30"
            disabled={isLoading}
            className="form-input"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="hours_per_day">Hours per Day</label>
          <input
            type="number"
            id="hours_per_day"
            name="hours_per_day"
            value={formData.hours_per_day}
            onChange={handleChange}
            min="1"
            max="12"
            disabled={isLoading}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="prefer_format">Preferred Format</label>
          <select
            id="prefer_format"
            name="prefer_format"
            value={formData.prefer_format}
            onChange={handleChange}
            disabled={isLoading}
            className="form-select"
          >
          <option value="mix">Mix</option>
          <option value="videos">Videos</option>
          <option value="blogs">Blogs</option>
          </select>
        </div>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="free_only"
            checked={formData.free_only}
            onChange={handleChange}
            disabled={isLoading}
            className="form-checkbox"
          />
          <span>Free resources only</span>
        </label>
      </div>

      <button
        type="submit"
        className="form-submit-button"
        disabled={isLoading || !formData.concept.trim()}
      >
        {isLoading ? 'Generating...' : 'Generate Itinerary'}
      </button>
    </form>
  )
}
