import './ResumeItem.scss';

interface ResumeItemInterface {
  data: any[];
}

// Have the bullet list style types to be square

const ResumeItem = ({ data }: ResumeItemInterface): JSX.Element => {
  return (
    <>
      {data.map((item: any) => (
        <article className="item-container" key={item.id} id={item.header}>
          {item.date ? (
            <div className="item-title">
              <h4>
                {item.date} <span>({item.category})</span>
              </h4>
            </div>
          ) : null}
          <div className="resume-item-overview">
            <div className="item-section">
              <h3>{item.name}</h3>
              <p className="resume-item-location">{item.location}</p>
              <p className="resume-item-description">{item.position || item.degree}</p>
            </div>
            <div className="item-section">
              <ul className="item-list">
                {item.tasks?.map((task: any, index: number) => (
                  <li className="resume-list-item" key={index}>
                    <p>{task}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default ResumeItem;
