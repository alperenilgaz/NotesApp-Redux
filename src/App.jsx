
import Content from './components/Content';
import { useState } from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import {MainContext} from './components/MainContext';
import NoteList from './components/NoteList';
import { useSelector } from 'react-redux';

function App() {
  const [filter, setfilter] = useState("")

  const data = {
    setfilter,
    filter,
    
  }
 
  return (

   <> 
   <MainContext.Provider value={data}>
    <div className="noteapp">
      <Header/>
      <Filter/>
      <Content/>
    </div>
    <NoteList/>
    </MainContext.Provider>
    </>
    
  );
}

export default App;
