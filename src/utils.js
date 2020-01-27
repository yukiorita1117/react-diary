//Date関数をISO表記にパース
export const timeCurrentIso8601 = () => new Date().toISOString();

export const currentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeek = today.getDay();
  const dayOfWeekStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    dayOfWeek
  ];

  return `${year} ${month}/${day} ${dayOfWeekStr}`;
};
