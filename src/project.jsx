function Project({
  screenshotSrc,
  screenshotAlt,
  title,
  githubLink,
  liveLink,
  description,
}) {
  return (
    <div className="container">
      <div className="project-screenshot">
        <img src={screenshotSrc} alt={screenshotAlt} />
      </div>
      <div className="project-description">
        <div className="project-title">
          <h3>{title}</h3>
          <div className="project-links">
            <a href={githubLink}>
              <i className="devicon-github-original colored"></i>
            </a>
            <a href={liveLink} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>open-in-new</title>
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
              </svg>
            </a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
