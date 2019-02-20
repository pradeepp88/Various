export default class RecentOrder {
  public dateTime: Date = new Date();
  public message: string = '';
  constructor(dateTime: any, message: any) {
    this.dateTime = new Date(dateTime);
    this.message = message;
  }
}
