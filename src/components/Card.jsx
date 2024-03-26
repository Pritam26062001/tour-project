import  { useState } from 'react';



function Card({id, name, info,image, price, removeTour}) {
    const [readmore,setRedmore] = useState(false);

    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler(){
        setRedmore(!readmore)
    }

  return (
    <div className='card'>
       <img src={image} className='image' />
       <div className='tour-info'> 
          <div className='tour-details'>
            <h4 className='tour-price'>Rs.{price}</h4>
            <h4 className='tour-title'>{name}</h4>
          </div>

          <div className='description'>
                {description}
                <span className='read-more' onClick={readmoreHandler}>
                    {readmore ? 'show lwss': 'read more'}
                </span>
          </div>
       </div>
       <button className='btn-red' onClick={() => removeTour(id)}>
        Not Insterested
       </button>
    </div>
  )
}

export default Card
