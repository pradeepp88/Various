export default class Agent {
  public key: number;
  public AgentId: number;
  public DealerCode: string;
  public LastName: string;
  public FirstName: string;
  public FullName: string;
  public code: string;
  constructor(key: number, id: number, dealerCode: string, code: string, lastName: string, firstName: string) {
    this.key = key;
    this.AgentId = id;
    this.DealerCode = dealerCode;
    this.code = code;
    this.LastName = lastName;
    this.FirstName = firstName;
    this.FullName = this.LastName + ', ' + this.FirstName;
  }
}
