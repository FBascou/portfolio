import './Box.scss'

export interface BoxInterface {
  item: string
}

const Box = ({ item }: BoxInterface): JSX.Element => {
  return <div className="box-container">{item}</div>
}

export default Box
