import RequestBase from '@/model/RequestBase';
import store from '@/store';
import Agent from '@/model/Agent';

export default class DashboardPageRequest extends RequestBase {
  public RequestedAgent: Agent;

  constructor() {
    super();
    this.RequestedAgent = store.state.currentAgent as Agent;
  }
}
