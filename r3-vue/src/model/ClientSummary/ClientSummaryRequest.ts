import RequestBase from '@/model/RequestBase';
import Agent from '@/model/Agent';
import store from '@/store';
export default class ClientSummaryRequest extends RequestBase {
  public OperatorIsAdvisor: boolean;
  public CurrentAgent: Agent;
  public RequestedClientId: number;
  constructor(RequestedClientId: number) {
    super();
    this.CurrentAgent = store.state.currentAgent;
    this.OperatorIsAdvisor = true;
    this.RequestedClientId = RequestedClientId;
  }
}
