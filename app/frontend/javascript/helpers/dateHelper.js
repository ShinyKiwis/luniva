const DateHelper = {
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
  }
}

export default DateHelper;
