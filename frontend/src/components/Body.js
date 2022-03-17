import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import axios from 'axios';
import Showresult from './Showresult';

function Body() {

  const [notes, getNotes] = useState('');

  useEffect(() => {
    getFiles()
  }, []);

  const getFiles = () => {
    axios.get('http://localhost:8000/api/files')
      .then((res) => {
        const allNotes = res.data;
        getNotes(allNotes);
      })
      .catch(error => console.error(`error: ${error}`));
  }

  return (
    <>
      <div>
        <Showresult notes={notes} />
      </div>
  </>
  )
}

export default Body;
