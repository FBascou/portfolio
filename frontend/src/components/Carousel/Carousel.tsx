import { useState } from 'react'
import dataProjects from '../../dataProjects.json'
import Box from '../../components/Box/Box'
import './Carousel.scss'
import { ProjectsPageInterface } from '../../utilities/interfaces/projects-page.interface'
import { useHorizontalScroll } from '../../utilities/hooks/useHorizontalScroll'

const Carousel = (): JSX.Element => {
  const [data, setData] = useState<ProjectsPageInterface[]>(dataProjects)
  const scrollRef = useHorizontalScroll()

  const handleClickLeft = () => {}

  // carousel header items onClick, useReducer?, go to the carousel-content-item
  // map over data (maybe: data.map((_, index) => data[index].map(item => item...)))

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <ul className="carousel-header-items">
          {data.map((item) => (
            <li key={item.id} className="carousel-header-item">
              <a href={`#${item.name}`}>
                <p>{item.name}</p>{' '}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel-content">
        <div className="carousel-content-items" ref={scrollRef}>
          {data.map((item) => (
            <div className="carousel-content-item" key={item.id} id={item.name}>
              <div className="carousel-content-item-title">
                <h4>{item.name}</h4>
              </div>
              <div className="carousel-content-item-overview">
                <div className="carousel-content-item-overview-section carousel-content-item-info">
                  <div className="carousel-content-item-section">
                    <div className="carousel-content-item-section-header">
                      <h3>Description</h3>
                    </div>
                    <div className="carousel-content-item-section-content">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="carousel-content-item-section">
                    <div className="carousel-content-item-section-header">
                      <h3>Features</h3>
                    </div>
                    <div className="carousel-content-item-section-content">
                      <ul className="carousel-content-item-section-content">
                        {item.features?.map((item) => (
                          <li key={item}>
                            <Box item={item} color="purple" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="carousel-content-item-section">
                    <div className="carousel-content-item-section-header">
                      <h3>Tech</h3>
                    </div>
                    <div className="carousel-content-item-section-content">
                      <ul className="carousel-content-item-section-content">
                        {item.tech?.map((item) => (
                          <li key={item}>
                            <Box item={item} color="purple" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-content-item-overview-section carousel-content-item-media">
                  <div className="carousel-content-item-links">
                    <a target="_blank" href={item.github} className="project-url">
                      Github
                    </a>
                    <a target="_blank" href={item.url} className="project-url">
                      Website
                    </a>
                  </div>
                  <div className="carousel-content-item-img">
                    <img className="project-img" src={item.media} alt={item.name} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="carousel-content-btns">
          <button className="carousel-content-btn-left">{'<'}</button>
          <button className="carousel-content-btn-right">{'>'}</button>
        </div> */}
      </div>
    </div>
  )
}

export default Carousel
