const DateHelper = {
  // Example: Date object with time is 23:59
  get currentEndOfDay() {
    const date = new Date()
    date.setHours(23, 59, 0, 0)
    return date
  },
  // Example: 2025
  get currentYear() {
    return new Date().getFullYear();
  },
  // Example: June
  get currentMonth() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date().getMonth()];
  },
  // Example: ['2025-06-01', '2025-06-30']
  get currentMonthRange() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-indexed

    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0); // Last day of the current month

    const formatLocal = (date) =>
      `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    return [formatLocal(start), formatLocal(end)];
  },
  isToday(date) {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();
  },
  formatDate(date) {
    const isEndOfDay =
      date.getHours() === 23 && date.getMinutes() === 59

    const dayMonth = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
    })

    if (isEndOfDay) {
      return dayMonth
    }

    // Format time as HH:mm
    const time = date
    .toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    return `${dayMonth} ${time}`
  }
}

export default DateHelper;
