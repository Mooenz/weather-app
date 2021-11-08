function convertToDays(numerDay) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return {
    getDay() {
      return days[numerDay];
    },
  };
}

export default convertToDays;
