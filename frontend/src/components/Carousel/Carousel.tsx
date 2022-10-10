import './Carousel.scss'
import dataProjects from '../../dataProjects.json'
import { useHorizontalScroll } from '../../utilities/hooks/useHorizontalScroll'
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage'

const Carousel = (): JSX.Element => {
  const scrollRef = useHorizontalScroll()

  //Carousel is a component, so Carousel should be inside the pages (Project, Resume)

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <ul className="carousel-header-items">
          {dataProjects.map((item) => (
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
          <ProjectsPage />
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
