export const DateFormat = ({ datestring }) => {
  const date = new Date(datestring);

  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  return (
    <p>
      &nbsp;
      {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}{" "}
      {date.getHours()}:{addZero(date.getMinutes())}
    </p>
  );
};
