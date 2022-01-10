import React, { useState, useEffect } from 'react'
import { getAPOD } from './services/nasaService';
import DisplayList from './components/DisplayList';
import DateButton from './components/DateButton';
import LoadButton from './components/LoadButton';
import { Typography } from '@mui/material';
import './App.css';

function App() {
  const [APIRes, setAPIRes] = useState()
  const [date, setDate] = useState()
  const [count, setCount] = useState(5)

  useEffect(() => {
    var today = new Date();
    const todayDate = {year:today.getFullYear(), month:(today.getMonth() + 1), day:today.getDate()}
    setDate(todayDate)
  }, [])

  useEffect(() => {   
    getAPOD(date, count)
      .then(response => setAPIRes(response))
      .catch(() => setAPIRes())
  }, [date, count])

  return (
    <div className="App">
      <Typography component="div" variant="h4">
        Spacestagram
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Powered by NASA's Astronomy Picture of the Day (APOD) API
      </Typography>
      <DateButton setDate = {setDate}/>
      <DisplayList APIRes={APIRes} />
      <LoadButton setCount={setCount}/>
    </div>
  );
}

export default App;
