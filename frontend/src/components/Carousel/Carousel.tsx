import './Carousel.scss'
import { useHorizontalScroll } from '../../utilities/hooks/useHorizontalScroll'

interface CarouselInterface {
  data: any[]
  component?: JSX.Element
}

const Carousel = ({ data, component }: CarouselInterface): JSX.Element => {
  const scrollRef = useHorizontalScroll()

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <ul className="carousel-header-items">
          {data.map((item) => (
            <li key={item.id} className="carousel-header-item">
              <a href={`#${item.header}`}>
                <p>{item.header}</p>{' '}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel-content">
        <div className="carousel-content-items" ref={scrollRef}>
          {component}
        </div>
      </div>
    </div>
  )
}

export default Carousel
