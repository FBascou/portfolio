import './Carousel.scss';

interface CarouselInterface {
  data: any[];
  children?: JSX.Element;
}

const Carousel = ({ data, children }: CarouselInterface): JSX.Element => {
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
      <div className="carousel-content">{children}</div>
    </div>
  );
};

export default Carousel;
