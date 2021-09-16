import Navbar from "./Components/Navbar/Navbar";
import React from 'react'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
import {originals,action,horror,comedy,romance} from './urls';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <RowPoster url={originals} title='Netflix Originals' />
      <RowPoster url={action} title='Action' isSmall />
      <RowPoster url={horror} title='Horror' isSmall />
      <RowPoster url={comedy} title='Comedy' isSmall />
      <RowPoster url={romance} title='Romance' isSmall />
      
    </div>
  );
}

export default App;
