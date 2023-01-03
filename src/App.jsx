import './App.css';
import { useState, createContext } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import EventForm from './components/eventForm';
import EventList from './components/eventList';
import EventDetails from './components/eventDetails';
import Edit from './components/edit';
export const eventContext = createContext()
function App() {
  // const {eventName, startDate, endDate, description} = EventForm()
  const [eventList, setEventList] = useState([])
  const contextValue = { eventList, setEventList }
  return (
    <eventContext.Provider value={contextValue}>
      <div className="App">
        <div className='navBar'>
          <NavLink to='./eventForm'><button>ADD EVENT</button></NavLink>
          <NavLink to='./eventList'><button>EVENTS</button></NavLink>
        </div>
        <div className='display'>
          <Routes>
            <Route path='/' element={<EventForm />} />
            <Route path='/eventForm' element={<EventForm />} />
            <Route path='/eventList' element={<EventList />} />
            <Route path='/eventDetails/:eventName' element={<EventDetails />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
        </div>
      </div>
    </eventContext.Provider>
  );
}

export default App;
