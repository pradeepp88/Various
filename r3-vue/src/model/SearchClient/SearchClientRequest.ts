import RequestBase from '@/model/RequestBase';
import Agent from '@/model/Agent';
import store from '@/store';

export default class SearchClientRequest extends RequestBase {
  private Agent: Agent;
  private searchString: string;
  private pageNumber: number;
  private recordsCount: number;
  constructor(searchString: string) {
    super();
    this.Agent = store.state.currentAgent as Agent;
    this.searchString = searchString;
    this.pageNumber = 1;
    this.recordsCount = 60;
  }
}
