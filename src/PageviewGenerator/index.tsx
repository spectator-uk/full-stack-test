import React from 'react'
import { usePageviewGenerator } from './logic'

export const PageviewGenerator: React.FC = () => {
  const { generate, pageview } = usePageviewGenerator()

  return (
    <>
      <button style={{ fontSize: 24, marginBottom: 40 }} onClick={generate}>
        Generate pageview
      </button>

      {pageview && (
        <div>
          <h3>Last pageview</h3>
          <p>ID: {pageview?.id}</p>
          <p>Date: {pageview?.created_at.toISOString()}</p>
          <p>Title: {pageview?.title}</p>
          <p>Description: {pageview?.description}</p>
          <p>Tags: {pageview.tags?.join(', ')}</p>
          <p>User ID: {pageview?.user?.id}</p>
          <p>User joined: {pageview?.user?.created_at.toISOString()}</p>
        </div>
      )}
    </>
  )
}
