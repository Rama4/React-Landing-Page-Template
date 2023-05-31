export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
            Maricopa County
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Our Partners
              </a>
            </li>
            <li>
              <a href='/#services' className='page-scroll'>
                Business Community
              </a>
            </li>
            <li class="dropdown">
	            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Events<b class="caret"></b></a>
	            <ul class="dropdown-menu multi-column columns-3">
		            <div class="row">
			            <div class="col-sm-4">
				            <ul class="multi-column-dropdown">
					            <li><a href="/addEvent">Add Event</a></li>
					            <li><a href="/events">View all Events</a></li>
					            <li class="divider"></li>
                      <li><a href='/#portfolio' className='page-scroll'>Events Gallery</a></li>
                      <li><a href='/#services' className='page-scroll'>Event Organizers</a></li>
				            </ul>
			            </div>
			            <div class="col-sm-4">
				            <ul class="multi-column-dropdown">
					            <li><a href="/1">Easter Egg Hunt</a></li>
					            <li><a href="/2">Kids to Park Day</a></li>
					            <li><a href="/3">Flower and Garden Festival</a></li>
					            <li><a href="/4">Memorial Day Ceremony</a></li>
				            </ul>
			            </div>
			            <div class="col-sm-4">
				            <ul class="multi-column-dropdown">
					            <li><a href="#">Fine Arts & Crafts Shows</a></li>
					            <li><a href="#">Leesburg airshow</a></li>
					            <li><a href="#">Freeze your Gizzard</a></li>
					            <li class="divider"></li>
					            <li><a href="#">September 11 Observance</a></li>
				            </ul>
			            </div>
		            </div>
	            </ul>
	        </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
