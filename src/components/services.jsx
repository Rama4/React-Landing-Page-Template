export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Academy</h2>
          <p>
          Academy is a premium technology-based online academy designed to create professionals in the IT department. Students will learn with real case studies guided by experienced tutors. To support the learning, students will use company-level project management tools and help them grow their soft skills in leadership and communication.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <h3>{d.date}</h3>
                    <h3>{d.time}</h3>
                    <p>{d.text}</p>
                  </div>
                  <div>
                    <a href={d.download} target="_blank">View Flayer</a>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
