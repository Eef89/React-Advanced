import { createContext, useState, useEffect } from "react";

export const EventContext = createContext({});

EventContext.displayName = "EventContext";

export const EventContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userresponse = await fetch("http://localhost:3000/users");
      const eventresponse = await fetch("http://localhost:3000/events");
      const eventlist = await eventresponse.json();
      const userlist = await userresponse.json();
      setUsers(userlist);
      setEvents(eventlist);
    };
    fetchUsers();
  }, []);

  return (
    <EventContext.Provider value={{ users, events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};
