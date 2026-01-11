import type { ItineraryResponse } from '../types/itinerary'

/**
 * Mock itinerary data to display when API fails
 */
export const mockItineraryResponse: ItineraryResponse = {
  concept: 'Learn React Basics',
  level: 'beginner',
  days: 5,
  project: 'Build a Todo Application',
  itinerary: [
    {
      day: 1,
      objective: 'Introduction to React and Setup',
      items: [
        {
          title: 'React Official Documentation - Getting Started',
          url: 'https://react.dev/learn',
          content_type: 'blog',
          minutes: 30,
          why: 'Official React documentation provides the most accurate and up-to-date information for beginners',
          free_label: 'FREE_FULL',
          free_evidence: 'Publicly available documentation'
        },
        {
          title: 'React Crash Course - Traversy Media',
          url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
          content_type: 'video',
          minutes: 45,
          why: 'Hands-on video tutorial that covers React fundamentals in an easy-to-follow format',
          free_label: 'FREE_FULL',
          free_evidence: 'Free YouTube video'
        },
        {
          title: 'Setting up React Development Environment',
          url: 'https://react.dev/learn/installation',
          content_type: 'document',
          minutes: 15,
          why: 'Step-by-step guide to setting up your development environment',
          free_label: 'FREE_FULL',
          free_evidence: 'Official documentation'
        }
      ]
    },
    {
      day: 2,
      objective: 'Components, Props, and JSX',
      items: [
        {
          title: 'Understanding React Components',
          url: 'https://react.dev/learn/your-first-component',
          content_type: 'blog',
          minutes: 25,
          why: 'Learn the fundamentals of React components and how they work',
          free_label: 'FREE_FULL',
          free_evidence: 'Official React documentation'
        },
        {
          title: 'Props in React - Explained',
          url: 'https://react.dev/learn/passing-props-to-a-component',
          content_type: 'blog',
          minutes: 20,
          why: 'Understanding props is crucial for component communication',
          free_label: 'FREE_FULL',
          free_evidence: 'Free documentation'
        },
        {
          title: 'JSX Tutorial - Interactive Guide',
          url: 'https://react.dev/learn/writing-markup-with-jsx',
          content_type: 'document',
          minutes: 30,
          why: 'Master JSX syntax which is essential for React development',
          free_label: 'FREE_FULL',
          free_evidence: 'Official guide'
        }
      ]
    },
    {
      day: 3,
      objective: 'State and Event Handling',
      items: [
        {
          title: 'React State Management - useState Hook',
          url: 'https://react.dev/reference/react/useState',
          content_type: 'blog',
          minutes: 35,
          why: 'useState is the most important hook for managing component state',
          free_label: 'FREE_FULL',
          free_evidence: 'React documentation'
        },
        {
          title: 'Event Handling in React - Complete Guide',
          url: 'https://react.dev/learn/responding-to-events',
          content_type: 'document',
          minutes: 25,
          why: 'Learn how to handle user interactions in React applications',
          free_label: 'FREE_FULL',
          free_evidence: 'Official documentation'
        },
        {
          title: 'React State Tutorial - Codecademy',
          url: 'https://www.codecademy.com/learn/react-101',
          content_type: 'video',
          minutes: 40,
          why: 'Interactive video course with practical examples',
          free_label: 'FREE_PARTIAL',
          free_evidence: 'Free tier available'
        }
      ]
    },
    {
      day: 4,
      objective: 'Lists, Keys, and Conditional Rendering',
      items: [
        {
          title: 'Rendering Lists in React',
          url: 'https://react.dev/learn/rendering-lists',
          content_type: 'blog',
          minutes: 30,
          why: 'Essential skill for displaying dynamic data in React',
          free_label: 'FREE_FULL',
          free_evidence: 'React docs'
        },
        {
          title: 'Conditional Rendering Patterns',
          url: 'https://react.dev/learn/conditional-rendering',
          content_type: 'document',
          minutes: 20,
          why: 'Learn different patterns for conditional rendering',
          free_label: 'FREE_FULL',
          free_evidence: 'Official guide'
        },
        {
          title: 'React Keys Explained - Web Dev Simplified',
          url: 'https://www.youtube.com/watch?v=0sAsP9xDHyo',
          content_type: 'video',
          minutes: 15,
          why: 'Clear explanation of why keys are important in React',
          free_label: 'FREE_FULL',
          free_evidence: 'Free YouTube content'
        }
      ]
    },
    {
      day: 5,
      objective: 'Building Your First React Project',
      items: [
        {
          title: 'Build a Todo App - React Tutorial',
          url: 'https://react.dev/learn/tutorial-tic-tac-toe',
          content_type: 'document',
          minutes: 60,
          why: 'Official React tutorial that teaches by building a real application',
          free_label: 'FREE_FULL',
          free_evidence: 'Official tutorial'
        },
        {
          title: 'React Best Practices for Beginners',
          url: 'https://react.dev/learn/thinking-in-react',
          content_type: 'blog',
          minutes: 25,
          why: 'Learn how to think in React and follow best practices',
          free_label: 'FREE_FULL',
          free_evidence: 'React documentation'
        },
        {
          title: 'Deploying React Apps - Free Hosting Guide',
          url: 'https://vercel.com/docs/frameworks/react',
          content_type: 'document',
          minutes: 20,
          why: 'Learn how to deploy your React application for free',
          free_label: 'FREE_FULL',
          free_evidence: 'Free hosting platform documentation'
        }
      ]
    }
  ]
}
