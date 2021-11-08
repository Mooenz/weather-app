function convertToMonth(numerMonth) {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return {
    getMonth() {
      return month[numerMonth];
    },
  };
}

export default convertToMonth;
