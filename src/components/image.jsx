import { useEffect } from "react"

export const Image = ({id,name,smallImage}) => {


  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={id}
          title={name}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{name}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={name}
          />{' '}
        </a>{' '}
      </div>
    </div>
  );
}