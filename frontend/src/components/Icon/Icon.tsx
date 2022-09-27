import './Icon.scss'

const Icon = ({ icon }: any): JSX.Element => {
  return (
    <div className="icon-container">
      <img className="icon" src={icon} alt="" />
    </div>
  )
}

export default Icon
