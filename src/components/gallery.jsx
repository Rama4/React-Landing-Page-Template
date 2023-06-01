import { useEffect } from "react";
import { Image } from "./image";

export const Gallery = (props) => {

  useEffect(()=>{
    console.log(props.data);
    // props.data.map((d) => console.log(d));
  },[props, props.data]);

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Events Gallery</h2>
        </div>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map(d => {
                return (
                  <div key={d.id} className='col-sm-6 col-md-4 col-lg-4'>
                    <Image id={d.id} name={d.name} url={d.imageurl}   />
                  </div>
                );
            })
              : 'Loading...'}
          </div>
      </div>
    </div>
  )
}

