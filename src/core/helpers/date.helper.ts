export class DateTimeHelper {
  static formateDateTo(date: Date | number | string, formate: string): string {
    if (typeof date === 'string') {
      return new Date(date).toJSON().slice(0, 10);
    }

    if (typeof date === 'number') {
      return new Date(date).toJSON().slice(0, 10);
    }

    if (date instanceof Date) {
      return date.toJSON().slice(0, 10);
    }

    throw new Error('Invalid Date');
  }
}
