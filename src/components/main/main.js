import React from 'react';

import './main.css';
import MainContent from '../main-content/main-content';
import MainButtons from '../main-buttons/main-buttons';

function Main(props) {
  return (
    <main className="main">
      <section className="main__results">
        <p>You searched for: "{props.nameSearch}", {props.totalResults} results found</p>
      </section>

      <MainContent content={props.content} />
      <MainButtons 
        totalResults={props.totalResults}
        onClickNextPage={props.onClickNextPage}
        content={props.content}
        numberActivePage={props.numberActivePage}
        getArray={props.getArray}
      />    
    </main>
  )
}

export default Main;