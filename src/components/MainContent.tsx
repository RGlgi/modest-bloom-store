import React from 'react'
import './MainContent.css'
import ImageSlider from './ImageSlider.tsx'
import WeeklyTrends from './WeeklyTrends.tsx'
import CategoryBlocks from './CategoryBlocks.tsx'

const MainContent: React.FC = () => {
  return (
    <div className="app-container">
      <ImageSlider />
      <WeeklyTrends />
      <CategoryBlocks />
      <section className="about-section">
        <h2>🌸 About Modest Bloom</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione id
          consequatur ipsum illum iste sed nobis necessitatibus fuga, commodi
          earum repudiandae repellendus impedit explicabo rem tenetur saepe
          molestias harum.
        </p>
        <p>
          Modesty Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          voluptate eveniet omnis voluptates ut aspernatur repudiandae, mollitia
          placeat officia consectetur voluptatem a repellendus reiciendis maxime
          adipisci molestiae autem, similique dolore?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos
          libero quo, reprehenderit inventore quod iusto iure fugit nihil minus.
        </p>
        <p>
          <strong>
            Thank you for being part of our journey. Bloom with us. 🌿
          </strong>
        </p>
      </section>
    </div>
  )
}

export default MainContent
