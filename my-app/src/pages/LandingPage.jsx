import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import SelectedEvents from '../components/SelectedEvents';
import { mockData } from '../components/mockData';
import axios from 'axios';

function LandingPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/events')
      .then(response => {
        console.log('Fetched selected events:', response.data);
        setSelectedEvents(response.data);
      })
      .catch(error => console.error('Error fetching selected events:', error));
    setEvents(mockData);
  }, []);

  useEffect(() => {
    if (selectedEvents.length > 0) {
      axios.post('http://localhost:4000/api/events', selectedEvents)
        .then(response => console.log('Saved selected events:', response.data))
        .catch(error => console.error('Error saving selected events:', error));
    }
  }, [selectedEvents]);

  const handleSelect = (event) => {
    if (selectedEvents.length < 3 && !isTimeConflict(event)) {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  const handleDeselect = (event) => {
    setSelectedEvents(selectedEvents.filter(e => e.id !== event.id));
  };

  const isTimeConflict = (newEvent) => {
    return selectedEvents.some(e => 
      (new Date(e.start_time) < new Date(newEvent.end_time)) && 
      (new Date(newEvent.start_time) < new Date(e.end_time))
    );
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-4/5 bg-white shadow-lg rounded-lg p-6 my-10">
        <div className="flex">
          <div className="w-3/5 p-4 border-r border-gray-300">
            <h2 className="text-3xl text-center font-semibold mb-4">All Events</h2>
            <div className="grid grid-cols-2 gap-4">
              {events.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onSelect={handleSelect} 
                  isSelected={selectedEvents.some(e => e.id === event.id)}
                  isDisabled={selectedEvents.some(e => isTimeConflict(event) && e.id !== event.id)}
                />
              ))}
            </div>
          </div>
          <div className="w-2/5 p-4">
            <h2 className="text-3xl text-center font-semibold mb-4">Selected Events</h2>
            <SelectedEvents events={selectedEvents} onDeselect={handleDeselect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
