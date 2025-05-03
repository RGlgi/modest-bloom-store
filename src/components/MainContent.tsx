import React from 'react'

import ImageSlider from './ImageSlider.tsx'
import WeeklyTrends from './WeeklyTrends.tsx'
import CategoryBlocks from './CategoryBlocks.tsx'

const MainContent: React.FC = () => {
  return (
    <div className="app-container">
      <ImageSlider />
      <WeeklyTrends />
      <CategoryBlocks />
    </div>
  )
}

export default MainContent
