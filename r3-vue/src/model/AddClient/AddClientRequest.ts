import RequestBase from '@/model/RequestBase';
import Agent from '@/model/Agent';
import store from '@/store';
import AddClientPersonalDetail from '@/model/AddClient/AddClientPersonalDetail';
import AddClientPreferences from '@/model/AddClient/AddClientPreferences';
import AddClientAddress from '@/model/AddClient/AddClientAddress';
import AddClientPhone from '@/model/AddClient/AddClientPhone';
import AddClientUsPersonDetail from '@/model/AddClient/AddClientUsPersonDetail';
import AddClientBankInfo from '@/model/AddClient/AddClientBankInfo';
import AddClientUsCompanyDetail from '@/model/AddClient/AddClientUsCompanyDetail';
import AddClientEnterpriseDetail from '@/model/AddClient/AddClientEnterpriseDetail';

export default class AddClientRequest extends RequestBase {
  public agent: Agent;
  public postType: string = '';
  public workflowId: number = -1;
  public rowVer: number = -1;
  public moduleId: number = -1;
  public currentForm: string = '';
  public isEnterprise: boolean = false;

  public Details: AddClientPersonalDetail = new AddClientPersonalDetail();
  public preferences: AddClientPreferences = new AddClientPreferences();
  public addresses: AddClientAddress[] = [];
  public Phones: AddClientPhone[] = [];
  public usPersonDetail: AddClientUsPersonDetail = new AddClientUsPersonDetail();
  public bankInfo: AddClientBankInfo = new AddClientBankInfo();
  public usCompanyDetail: AddClientUsCompanyDetail = new AddClientUsCompanyDetail();
  public enterpriseDetails: AddClientEnterpriseDetail = new AddClientEnterpriseDetail();

  constructor() {
    super();
    this.agent = store.state.currentAgent;
  }
}
