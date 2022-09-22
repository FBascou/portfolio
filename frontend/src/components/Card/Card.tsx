import HeadingThree from '../../components/HeadingThree/HeadingThree'
import './Card.scss'

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-info card-column">
        <div className="card-header">
          <h4>Project 1</h4>
        </div>
        <div className="card-description">
          <div className="card-title">
            <HeadingThree title="Description" />
          </div>
          <div className="card-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error ipsum odio rem
              nostrum nulla doloremque quia maxime.
            </p>
          </div>
        </div>
        <div className="card-features">
          <div className="card-title">
            <HeadingThree title="Features" />
          </div>
          <div className="card-content">
            <ul>
              <li>API Calls</li>
              <li>Forms</li>
              <li>Responsive</li>
              <li>Searchbar</li>
            </ul>
          </div>
        </div>
        <div className="card-tech">
          <div className="card-title">
            <HeadingThree title="Tech" />
          </div>
          <div className="card-content">
            <ul>
              <li>Typescript</li>
              <li>React</li>
              <li>SCSS</li>
              <li>Axios</li>
              <li>Formik</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-img card-column">
        <div className="card-img-container">
          <img src="./Project1" alt="" />
          <div className="card-img-links">
            <ul>
              <li>URL</li>
              <li>GH</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
