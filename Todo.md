# Todo:

## A list of events

We would like to display a list of all events in <EventsPage/>. Start by retrieving all the events from the back-end using a query.
Display the fetched events on the users’ screen.
Add the following details when displaying an event: title, description, image, startTime & endTime, categories
Make an event item clickable that leads the user to a separate event page by using React Router.
Add an “Add event” button that either opens a pop-up/modal or leads you to a new screen where you can add new events by using a form.
Connect the add events feature with the back-end so that new events get uploaded to the server as well.
Add a Search Function. We want a way for users to search for specific events on the page that displays all the events.
Add a Filter Function. We need a feature that lets users filter the displayed results based on different categories.

## Event page

Start working in the <EventPage /> component and show the following details on the screen: title, description, image, startTime & endTime, categories and by who it’s created (name, image)
Create an “Edit” button that allows the user to edit the details shown on the page. You can open it in a modal, or the same page, etc. Use a form to edit the data.
Update the data on the server after saving newly made edits.
Show a message on success or on failure. This can be done e.g. in the form of a toast(opens in a new tab).
Add a delete button that allows the user to delete the event.
Add an extra check and warning to make sure that the user is 100% sure they want to delete the event
Sent a delete request to the server after confirmation.
Redirect the user back to the events page
