export class DateTimeHelper {
  static formateDateTo(date: Date | number | string): string {
    const convertedDate = new Date(date);

    if (!isNaN(convertedDate.getTime())) {
      return convertedDate.toJSON().slice(0, 10);
    } else {
      return ''
    }
  }

  static setDateTime(date: number, hours: number, min: number, sec: number): number {
    return new Date(date).setHours(hours, min, sec);
  }
}
