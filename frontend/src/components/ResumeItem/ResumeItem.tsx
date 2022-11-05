import './ResumeItem.scss'

interface ResumeItemInterface {
  data: any[]
}

// Have the bullet list style types to be square

const ResumeItem = ({ data }: ResumeItemInterface): JSX.Element => {
  return (
    <>
      {data.map((item: any) => (
        <article className="resume-item-container" key={item.id} id={item.header}>
          {item.date ? (
            <div className="resume-item-title">
              <h4>{item.date}</h4>
            </div>
          ) : null}
          <div className="resume-item-overview">
            <div className="resume-item-section">
              <div className="resume-item-section-content">
                <h3>{item.name}</h3>
              </div>
            </div>
            <div className="resume-item-section">
              <div className="resume-item-section-content">
                <p className="resume-item-location">{item.location}</p>
              </div>
            </div>
            <div className="resume-item-section">
              <div className="resume-item-section-content">
                <p className="resume-item-description">{item.position || item.degree}</p>
              </div>
            </div>
            <div className="resume-item-section">
              <div className="resume-item-section-content">
                <ul className="resume-item-list">
                  {item.tasks?.map((task: any, index: number) => (
                    <li className="resume-item-list-item" key={index}>
                      <p>{task}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export default ResumeItem
