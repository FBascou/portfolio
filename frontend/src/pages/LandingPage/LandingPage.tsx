import './LandingPage.scss'

const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-container">
      <div className="landing-title">
        <p className="title">
          Hi, I'm{' '}
          <span id="header-span" className="header-span">
            Felipe
          </span>
        </p>
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
      <div className="landing-btn">
        <button>Continue</button>
      </div>
    </div>
  )
}

export default LandingPage
