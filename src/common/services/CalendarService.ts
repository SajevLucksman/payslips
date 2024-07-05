export default class CalendarService {
  static getMonthName(dateString: string): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Extract the month number from the date string
    const monthNumber = parseInt(dateString.split('-')[1], 10);

    // Return the month name
    return monthNames[monthNumber - 1];
  }
}
