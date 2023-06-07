import {useState} from 'react';
import { SearchBar, SearchBarResults, UserIcon } from "./shared";
import { useEffect } from 'react';

export const Navigation = () => {
  const [results, setResults] = useState([]);

  useEffect(()=>{
    console.log(results);
  },[results])

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
              <a href='/' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='/search' className='page-scroll'>
                Directory
              </a>
            </li>
            <li>
              <a href='/signup' className='page-scroll'>
                Join
              </a>
            </li>
            <li>
              <a href='/about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <div className="page-scroll">
                <SearchBar className="" setResults={setResults} />
              </div>
            </li>
            <li class="dropdown">
              <a href='#' className='dropdown-toggle' data-toggle="dropdown">
                <UserIcon color="#DB408E" className="accountIcon" />
              </a>
	            <ul class="dropdown-menu">
                <li><a href="/account">Account Settings</a></li>
					      <li><a href="/login">Login</a></li>
					      <li><a href="/">Sign Out</a></li>
	            </ul>
	          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
