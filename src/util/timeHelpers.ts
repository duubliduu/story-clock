export const timeToSeconds = (time: string) => {
  const [hours, minutes] = time.split(":");
  return (Number(hours) * 60 + Number(minutes)) * 60;
};

export const getSeconds = () => {
  const date = new Date();
  const timeString = `${date.getHours()}:${date.getMinutes()}`;
  return timeToSeconds(timeString);
};
