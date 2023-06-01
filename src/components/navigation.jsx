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
            <li class="dropdown">
	            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Vendors<b class="caret"></b></a>
	            <ul class="dropdown-menu multi-column columns-3">
		            <div class="row">
			            <div class="col-sm-12">
				            <ul class="multi-column-dropdown">
					            <li><a href="/addVendor">Add Vendor</a></li>
					            <li><a href="/vendors">View all Vendors</a></li>
				            </ul>
			            </div>
		            </div>
	            </ul>
	        </li>
            <li>
              <a href='https://chooseleesburg.com/contact/#' className='page-scroll'>
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
					            <li><a href="/3">Memorial Day Ceremony</a></li>
					            <li><a href="/4">Summer JAMS</a></li>
				            </ul>
			            </div>
			            <div class="col-sm-4">
				            <ul class="multi-column-dropdown">
					            <li><a href="/5">Independence Day Celebration</a></li>
					            <li><a href="/6">Spring Bling, a Hometown Fine Arts & Crafts Show</a></li>
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
