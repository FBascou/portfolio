import React from 'react'
import HeadingTwo from '../../components/HeadingTwo/HeadingTwo'
import HeadingOne from '../../components/HeadingOne/HeadingOne'
import './HomePage.scss'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="home-container">
      <div className="title-container">
        <HeadingOne title="Hi, I'm Felipe" />
        <HeadingTwo title="Frontend Software Developer" />
      </div>
      {/* <div className="art-container">
        <div className="art-row art-row-one">
          <div className="art-line"></div>
        </div>
        <div className="art-row art-row-one">
          <div className="art-line"></div>
          <div className="art-line"></div>
        </div>
        <div className="art-row art-row-one">
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
        </div>
        <div className="art-row art-row-two">
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
        </div>
        <div className="art-row art-row-three">
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
        </div>
        <div className="art-row art-row-two">
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
        </div>
        <div className="art-row art-row-three">
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
        </div>
        <div className="art-row art-row-three">
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
          <div className="art-line"></div>
        </div>
      </div> */}
    </div>
  )
}

export default HomePage
