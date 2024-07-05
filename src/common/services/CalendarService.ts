export default class CalendarService {
  private static monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  static getMonthName(dateString: string): string {
    // Extract the month number from the date string
    const monthNumber = parseInt(dateString.split('-')[1], 10);

    // Return the month name
    return CalendarService.monthNames[monthNumber - 1];
  }
}