import './ProjectItem.scss';
import Box from '../Box/Box';

interface ProjectItemInterface {
  data: any[];
}

const ProjectItem = ({ data }: ProjectItemInterface): JSX.Element => {
  return (
    <>
      {data.map((item: any) => (
        <article className="item-container" key={item.id} id={item.header}>
          <div className="item-title">
            <h4>{item.name}</h4>
          </div>
          <div className="project-item-overview">
            <div className="project-item-overview-section project-item-info">
              <div className="item-section">
                <h3>Description</h3>
                <p>{item.description}</p>
              </div>
              <div className="item-section">
                <h3>Features</h3>
                <ul className="item-list">
                  {item.features.map((item: string) => (
                    <li key={item}>
                      <Box item={item} color="purple" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item-section">
                <h3>Tech</h3>
                <ul className="item-list">
                  {item.tech.map((item: string) => (
                    <li key={item}>
                      <Box item={item} color="purple" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="project-item-overview-section project-item-media">
              <div className="project-item-links">
                <a
                  target="_blank"
                  href={item.github}
                  className={`project-url ${item.github ? null : 'link-disabled'}`}
                >
                  <h3>Github {item.github ? null : <span className="error">(Private)</span>}</h3>
                </a>
                <a target="_blank" href={item.url} className="project-url">
                  <h3>Website</h3>
                </a>
              </div>
              <div className="project-item-img">
                <img src={item.media} alt={item.name} />
                {/* <video
                  src={item.media}
                  preload="none"
                  poster="https://static.vecteezy.com/system/resources/thumbnails/007/926/257/small/futuristic-hud-interface-technology-background-vector.jpg"
                  controls
                ></video> */}
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProjectItem;
