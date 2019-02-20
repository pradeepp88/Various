export default class SearchClientResultRow {
  public clientName: string;
  public clientNumber: string;
  public gainLoss: number;
  public marketValue: number;
  constructor(clientName: string, clientNumber: string, gainLoss: number, marketValue: number) {
    this.clientName = clientName;
    this.clientNumber = clientNumber;
    this.gainLoss = gainLoss;
    this.marketValue = marketValue;
  }
}
