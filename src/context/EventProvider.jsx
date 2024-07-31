import { createContext, useState, useEffect } from "react";

export const EventContext = createContext({});
EventContext.displayName = "EventContext";

export const EventContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [createdby, setCreatedby] = useState("1");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [count, setCount] = useState(1); // infinite loop solution dependency --> useEffect

  const createUser = async (event) => {
    // const response =
    await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = "Event Creator";
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
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
    fetchAll();
  }, [count]); // avoid infinite loop

  return (
    <EventContext.Provider
      value={{
        users,
        events,
        setEvents,
        categories,
        title,
        setTitle,
        createdby,
        setCreatedby,
        description,
        setDescription,
        category,
        setCategory,
        location,
        setLocation,
        image,
        setImage,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        createUser,
        count,
        setCount,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
