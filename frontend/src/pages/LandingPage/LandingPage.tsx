import InfiniteSquare from '../../components/InfiniteSquare/InfiniteSquare'
import './LandingPage.scss'

const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-container">
      <div className="landing-title">
        <h1>
          Hi, I'm{' '}
          <span id="header-span" className="header-span">
            Felipe
          </span>
        </h1>
      </div>
      <div className="landing-subtitle">
        <h2>Frontend Software Developer</h2>
      </div>
      <div className="landing-about">
        <h4>
          Looking to work on projects with
          <br />
          <span>Javascript</span>, <span>Typescript</span>, and <span> React</span>
        </h4>
      </div>
      <InfiniteSquare />
      <div className="landing-btn">
        <button>Enter</button>
      </div>
    </div>
  )
}

export default LandingPage
