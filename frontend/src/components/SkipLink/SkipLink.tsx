import './SkipLink.scss'

const SkipLink = (): JSX.Element => {
  return (
    <div className="skip-link-container">
      <a href="#main-content">
        <p>Press "Enter" to skip to Main section</p>
      </a>
    </div>
  )
}

export default SkipLink
