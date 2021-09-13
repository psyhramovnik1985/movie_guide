import React, { useEffect, useState } from 'react';

import './main-buttons.css';

function MainButtons(props) {
  const [ moreButtons, getMoreButtons ] = useState(null);

  useEffect(() => { 

    getMoreButtons(() => {
      const array = [];
      let totalPages = Math.ceil(props.totalResults / 10);

      if (totalPages < 1) return;

      if (props.numberActivePage < 7) {
        for (let i = 1; i <= 7; i++) {
          if ( i === 1) {
            array.push(
              <button data-number={i} onClick={props.onClickNextPage} className="main__buttons-pages number-buttons active" key={i + "button"}>{i}</button>
            ) 
          } else {
            array.push(
              <button data-number={i} onClick={props.onClickNextPage} className="main__buttons-pages number-buttons" key={i + "button"}>{i}</button>
            ) 
          }                   
        }
      } else {
        for (let i = props.numberActivePage - 3; i <= props.numberActivePage + 4; i++) {
          if (i <= totalPages)  {
            array.push(
              <button data-number={i} onClick={props.onClickNextPage} className="main__buttons-pages number-buttons" key={i + "button"}>{i}</button>
            )
          }       
                    
        }
      }

      return array;
    
    })
  }, [props.content, props.totalResults, props.numberActivePage]);

  return (
    <section className="main__buttons">
      <button onClick={props.onClickNextPage} id="prev" className="main__buttons-pages">&lt;</button>
      <div className="main__buttons-numbers">
        {moreButtons}
      </div>
      <button onClick={props.onClickNextPage} id="next" className="main__buttons-pages">&gt;</button>
    </section>  
  )
}

export default MainButtons;