import React from 'react'

const AboutBox = () => {
  return (
   <div className="about__boxes grid">
    <div className="about__box">
        <i className="about__icon icon-fire"></i>


        <div>
            <h3 className="about__title">
               198
            </h3>
            <span className="about__subtitle"> Project Completed</span>
        </div>
    </div>

    <div className="about__box">
        <i className="about__icon icon-cup"></i>


        <div>
            <h3 className="about__title">
              400
            </h3>
            <span className="about__subtitle">Cup of coffe</span>
        </div>
    </div>

    <div className="about__box">
        <i className="about__icon icon-people"></i>


        <div>
            <h3 className="about__title">
              200
            </h3>
            <span className="about__subtitle">Client satisfied</span>
        </div>
    </div>

    <div className="about__box">
        <i className="about__icon icon-badge"></i>


        <div>
            <h3 className="about__title">
              20
            </h3>
            <span className="about__subtitle">Competition winner</span>
        </div>
    </div>


   </div>
  )
}

export default AboutBox
