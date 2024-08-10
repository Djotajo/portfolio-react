import projects from "./projects";
import Project from "./project";

function Content() {
  let list;
  projects
    ? (list = projects.map((item) => (
        <Project
          screenshotSrc={item.screenshotSrc}
          key={item.title}
          screenshotAlt={item.screenshotAlt}
          title={item.title}
          githubLink={item.githubLink}
          liveLink={item.liveLink}
          description={item.description}
        />
      )))
    : null;

  return (
    <div className="content">
      <h2>My work</h2>
      <div className="projects">{list}</div>
    </div>
  );
}

export default Content;
