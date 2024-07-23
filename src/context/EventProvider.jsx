import { createContext, useState, useEffect } from "react";

export const EventContext = createContext({});
EventContext.displayName = "EventContext";

export const EventContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userresponse = await fetch("http://localhost:3000/users");
      const eventresponse = await fetch("http://localhost:3000/events");
      const categorieresponse = await fetch("http://localhost:3000/categories");
      const eventlist = await eventresponse.json();
      const userlist = await userresponse.json();
      const categorielist = await categorieresponse.json();
      setUsers(userlist);
      setEvents(eventlist);
      setCategories(categorielist);
    };
    fetchUsers();
  }, []);

  return (
    <EventContext.Provider value={{ users, events, setEvents, categories }}>
      {children}
    </EventContext.Provider>
  );
};
