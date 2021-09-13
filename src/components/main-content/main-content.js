import React, {  useEffect, useState } from 'react';

import './main-content.css';
import noPosterImage from '../../assets/images/not_poster.jpg';

function MainContent(props) {
  const [ elements, getElements ] = useState(null);

  useEffect(() => {
    getElements(() => {

      if (props.content !== null && props.content !== undefined) {
        return props.content.map((item, i) => {
          let urlImage = item.Poster;
          if (item.Poster === 'N/A') urlImage = noPosterImage;
              
          return (
            <div className="main__content-item" key={item.imdbID + i}>
              <div className="main__content-item-block">
                <img className="main__content-item-image" src={urlImage} alt="" placeholder={item.Title} />
              </div>
              <h4 className="main__content-item-h" >Name: {item.Title}</h4>
              <p>Year: {item.Year}</p>
              <p>ImdbID: {item.imdbID}</p>
              <p>Type: {item.Type}</p>
            </div>
          )
        }) 
      }           
    })
  }, [props.content])

  return (
    <section className="main__content">        
      {elements}
    </section>
  )
}

export default MainContent;