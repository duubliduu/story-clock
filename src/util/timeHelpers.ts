export const timeToSeconds = (time: string) => {
  const [hours, minutes, seconds = 0] = time.split(":");
  return (Number(hours) * 60 + Number(minutes)) * 60 + Number(seconds);
};

export const getSeconds = () => {
  const date = new Date();
  const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return timeToSeconds(timeString);
};
