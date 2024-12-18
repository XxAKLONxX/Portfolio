import React from 'react'
import './blog.css'
import Image1 from '../../assets/blog-1.svg'
import Image2 from '../../assets/blog-2.svg'
import Image3 from '../../assets/blog-3.svg'




const Blog = () => {
  return (
   <section className="blog container section" id="blog">
    <h2 className="section__title">Latest Posts</h2>
    <div className="blog__container grid">
      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">Reviews</span></a>
          <a href="#"><img src={Image1} alt="" className="blog__img" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">5 best Dev tools For your Project</h3>
          <div className="blog__meta">
            <span>18 December 2025</span>
            <span className="blog__dot">.</span>
            <span>Ghassen</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">Tutorial</span></a>
          <a href="#"><img src={Image2} alt="" className="blog__img" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">Commun misconseptions about seo</h3>
          <div className="blog__meta">
            <span>19 December 2025</span>
            <span className="blog__dot">.</span>
            <span>Ghassen</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">Freelance</span></a>
          <a href="#"><img src={Image3} alt="" className="blog__img" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">10 Not to skip rules about freelance</h3>
          <div className="blog__meta">
            <span>20 December 2025</span>
            <span className="blog__dot">.</span>
            <span>Ghassen</span>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Blog
