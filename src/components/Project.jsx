

export const Project = ({ title, logoSrc, description, tools, link }) => {
  return (
    <div className="col align-self-center col-lg-12 col-12">
      {/* <a href={link}> */}
      <div className="card bg-card"
      // style={{width: '18rem'}}
      >
        <img src={logoSrc} className="card-img-top project-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{tools}</p>
        </div>
        {link ? (
          <div className="card-body">
            <a href={link} ><button className="btn">{link.includes('github') ? 'GitHub' : 'Visit Project'}</button></a>
          </div>
        ) : null}
      </div>
      {/* </a> */}
    </div>
  )
}
