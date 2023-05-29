export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Events</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <a href={d.download} target="_blank">
                    <i className={d.icon}></i>              
                    <div className='service-desc'>
                      <a class="btn btn-info" role="button">View Flyer</a>
                      <h3>{d.name}</h3>
                      <h3>{d.date}</h3>
                      <h3>{d.time}</h3>
                      <p>{d.text}</p>
                    </div>
                  </a>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
