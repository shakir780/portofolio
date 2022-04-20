import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'
const Portfolio = () => {



   const data = [
    {
      id: 1,
      img: IMG1,
      title:"Crypto currecny DashBoard",
      github:"https://github",
      demo: "http://lama.dev",
    },
    {
      id: 2,
      img: IMG2,
      title:"Charts templates",
      github:"https://github",
      demo: "http://lama.dev",
    },
    {
      id: 3,
      img: IMG3,
      title:"Figma Dashboard",
      github:"https://github",
      demo: "http://lama.dev",
    },
    {
      id: 4,
      img: IMG4,
      title:"Maintaining tasks",
      github:"https://github",
      demo: "http://lama.dev",
    },
    {
      id: 5,
      img: IMG5,
      title:"charts templates",
      github:"https://github",
      demo: "http://lama.dev",
    },
    { id: 6,
      img: IMG6,
      title:"restaurant",
      github:"https://github",
      demo: "http://lama.dev",
    },
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

<div className="container portfolio__container">
  {
    data.map(({id,img,title,github,demo})=>{
      
      return(
      <article key={id} className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={img} alt={title} />
  </div>
    <h3>{title}</h3>
    <div className="portfolio__item-cta">
    <a href={github} className='btn' target='_blank'>GitHub</a>
    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
   
 
  </article>
    )})
    
  }
</div>

    </section>
  )
}

export default Portfolio