function convertTime(timeStamp) {
  const date = new Date(timeStamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
}

export { convertTime };