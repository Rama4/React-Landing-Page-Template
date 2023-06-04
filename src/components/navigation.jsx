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
          <a className='navbar-brand' href='/'>
            <img src="img/Benefit.png" alt="" id="brand" />
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/A1' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='/directory' className='page-scroll'>
                Directory
              </a>
            </li>
            <li>
              <a href='/join' className='page-scroll'>
                Join
              </a>
            </li>
            <li>
              <a href='/about' className='page-scroll'>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
