export default class TopTenClientRow {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public marketValue: number;
  public gainLoss: number;
  public gainLossP: number;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    marketValue: number,
    gainLoss: number,
    gainLossP: number,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.marketValue = marketValue;
    this.gainLoss = gainLoss;
    this.gainLossP = gainLossP;
  }
}
