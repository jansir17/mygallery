import React from 'react'

const Gallery =({data}) => {
  return (
    <div className="container">
      {data.map((img)=>
        <div className='container' key={img.id}>
          <div>
            <img
            src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`}
            alt=''
            height="200" 
            width="250" />
          </div>
        </div>)}
    </div>
  )
}

export default Gallery;