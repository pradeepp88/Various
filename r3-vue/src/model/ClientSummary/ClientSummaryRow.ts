export default class ClientSummaryRow {
  public accountId: number;
  public accountNo: number;
  public accountType: string;
  public currCode: string;
  public gainLossAmt: number;
  public gainLossPct: number;
  public marketValue: number;
  constructor(
    accountId: number,
    accountNo: number,
    accountType: string,
    currCode: string,
    gainLossAmt: number,
    gainLossPct: number,
    marketValue: number,
  ) {
    this.accountId = accountId;
    this.accountNo = accountNo;
    this.accountType = accountType;
    this.currCode = currCode;
    this.gainLossAmt = gainLossAmt;
    this.gainLossPct = gainLossPct;
    this.marketValue = marketValue;
  }
}
