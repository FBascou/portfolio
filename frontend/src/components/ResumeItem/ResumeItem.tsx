import './ResumeItem.scss'

interface ResumeItemInterface {
  data: any[]
}

const ResumeItem = ({ data }: ResumeItemInterface): JSX.Element => {
  //year timeline with sorting to latest and earliest years

  return (
    <>
      {data.map((item: any) => (
        <div className="resume-item-container" key={item.id} id={item.header}>
          {item.list.map((el: any) => (
            <div className="resume-item-wrapper" key={el.id}>
              {el.date ? (
                <div className="resume-item-title">
                  <h4>{el.date}</h4>
                </div>
              ) : null}
              <div className="resume-item-overview">
                <div className="resume-item-section">
                  <div className="resume-item-section-content">
                    <h3>{el.name}</h3>
                  </div>
                </div>
                <div className="resume-item-section">
                  <div className="resume-item-section-content">
                    <p className="resume-item-location">{el.location}</p>
                  </div>
                </div>
                <div className="resume-item-section">
                  <div className="resume-item-section-content">
                    <p className="resume-item-description">{el.position || el.degree}</p>
                  </div>
                </div>
                <div className="resume-item-section">
                  <div className="resume-item-section-content">
                    <ul className="resume-item-list">
                      {el.tasks?.map((task: any, index: number) => (
                        <li className="resume-item-list-item" key={index}>
                          <p>{task}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default ResumeItem
