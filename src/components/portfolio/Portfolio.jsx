import React from 'react'
import './portfolio.css'
import sum21 from '../../assests/Screen Shot 2022-04-03 at 12.21.39 PM.png'
import fetchPets from '../../assests/fetchpets.png'
import bookEnd from '../../assests/bookend.png'
import {AiFillGithub} from 'react-icons/ai'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={sum21} alt="game screenshot" />
        </div> 
          <h3>Sum 21</h3>
          <p>My first coding project, Sum 21 is a simple card game designed to be very similar to Blackjack.</p>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/l-reilly/Sum-21' className='btn btn-primary'><AiFillGithub /></a> 
          </div>
        </article>
        <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={fetchPets} alt="site screenshot" />
        </div> 
          <h3>Fetch Pets</h3>
          <p>Collaborative effort to create a Full-stack Web Application between me and 2 classmates.</p>
          <div className='portfolio_item-cta'>

          <a href='https://github.com/jobritomar/FetchPets' className='btn btn-primary'><AiFillGithub /></a>
          <a href="https://puppy-dates-4.herokuapp.com/" className='btn btn-primary' target='_blank'> Live Demo</a> 
          </div>
          </article>
        <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={bookEnd} alt="game screenshot" />
        </div> 
          <h3>Book-end</h3>
          <p>MERN application that connects with an API I created to host one's own personal library of book titles.</p>
          <div className='portfolio_item-cta'>

          <a href='https://github.com/l-reilly/Book-end' className='btn btn-primary'><AiFillGithub /></a>
          <a href="https://book-end.netlify.app" className='btn btn-primary' target='_blank'> Live Demo</a> 
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio