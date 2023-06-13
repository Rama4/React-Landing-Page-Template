import {useState} from 'react';
import { SearchBar, UserIcon } from "./shared";
import { useEffect } from 'react';
import "../App.css";

export const Navigation = () => {
  const [results, setResults] = useState([]);

  useEffect(()=>{
    console.log(results);
  },[results])

  return (
    <nav id='menu' className='navbar navbar-default'>
      {/* <div className='container'> */}
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
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/search' className='nav-link page-scroll'>
                Directory
              </a>
            </li>
            <li className='nav-item'>
              <a href='/signup' className='nav-link page-scroll'>
                Join
              </a>
            </li>
            <li className='nav-item'>
              <a href='/about' className='nav-link page-scroll'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <div className="page-scroll">
                <SearchBar className="" setResults={setResults} />
              </div>
            </li>
            <li class="dropdown">
              <button className='dropdown-toggle btn btn-link' data-toggle="dropdown">
                <UserIcon color="#DB408E" className="accountIcon" />
              </button>
	            <ul class="dropdown-menu">
                <li className='nav-item'><a className='nav-link' href="/account">Account Settings</a></li>
					      <li className='nav-item'><a className='nav-link' href="/login">Login</a></li>
					      <li className='nav-item'><a className='nav-link' href="/">Sign Out</a></li>
	            </ul>
	          </li>
          </ul>
        </div>
      {/* </div> */}
    </nav>
  )
}
