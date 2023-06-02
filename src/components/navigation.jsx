export const Navigation = ({doShowLogin}) => {
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
	            <ul class="dropdown-menu">
		            <div class="row">
			            <div class="col-sm-12">
				            <ul class="multi-column-dropdown">
					            <li><a href="#" onClick={()=>doShowLogin('/addVendor')} data-toggle="modal" data-target="#loginModal">Add Vendor</a></li>
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
	            <ul class="dropdown-menu">
		            <div class="row">
			            <div class="col-sm-12">
				            <ul class="multi-column-dropdown">
					            <li><a href="#" onClick={() =>doShowLogin('/addEvent')} data-toggle="modal" data-target="#loginModal">Add Event</a></li>
					            <li><a href="/events">View all Events</a></li>
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
