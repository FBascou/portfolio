import './Carousel.scss'
import { useHorizontalScroll } from '../../utilities/hooks/useHorizontalScroll'

interface CarouselInterface {
  data: any[]
  component?: JSX.Element
}

const yearsArray: any[] = [
  { id: 0, year: 2006 },
  { id: 1, year: 2011 },
  { id: 2, year: 2015 },
  { id: 3, year: 2017 },
  { id: 4, year: 2018 },
  { id: 5, year: 2019 },
  { id: 6, year: 2020 },
  { id: 7, year: 2021 },
]

const Carousel = ({ data, component }: CarouselInterface): JSX.Element => {
  const scrollRef = useHorizontalScroll()

  //Carousel header should be years - 2010 - 2011 - 2012 - ... - 2022
  //Issue with carousel header
  //maybe will have to separate everything

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
