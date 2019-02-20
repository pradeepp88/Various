import StaticTableData from '@/model/StaticTableData';

export default class AddClientResponse {
  public workflowId: number = 0;
  public rowVer: number = 0;
  public moduleId: number = 0;
  public formToShow: string = '';
  public hasError: boolean = true;
  public titles: StaticTableData[] = [];

  public currencies: StaticTableData[] = [];
  public provinces: StaticTableData[] = [];
  public countries: StaticTableData[] = [];
  public phoneTypes: StaticTableData[] = [];
  public FATCATypeClassification: StaticTableData[] = [];
  public CRSEntityClassification: StaticTableData[] = [];
  public institutionTypes: StaticTableData[] = [];
  public recipientCodes: StaticTableData[] = [];
  public clientClasses: StaticTableData[] = [];
  public addressTypes: StaticTableData[] = [];

  public updateResponse(dto: any) {
    if (dto.workflowId) {
      this.workflowId = dto.workflowId;
    }
    if (dto.rowVer) {
      this.rowVer = dto.rowVer;
    }
    if (dto.formToShow) {
      this.formToShow = dto.formToShow;
    }
    if (dto.hasError) {
      this.hasError = dto.hasError;
    }
    if (dto.moduleId) {
      this.moduleId = dto.moduleId;
    }

    this.setStaticData('currencies', dto.currencies);
    this.setStaticData('provinces', dto.provinces);
    this.setStaticData('countries', dto.countries);
    this.setStaticData('phoneTypes', dto.phoneTypes);
    this.setStaticData('FATCATypeClassification', dto.FATCATypeClassification);
    this.setStaticData('CRSEntityClassification', dto.CRSEntityClassification);
    this.setStaticData('institutionTypes', dto.institutionTypes);
    this.setStaticData('recipientCodes', dto.recipientCodes);
    this.setStaticData('clientClasses', dto.clientClasses);
    this.setStaticData('addressTypes', dto.addressTypes);
    if (dto.titles) {
      for (let i = 0; i < dto.titles.length; i++) {
        this.titles.push(new StaticTableData(i, dto.titles[i]));
      }
    }
  }

  private setStaticData(attrName: string, responseData: any) {
    const selfProperty: StaticTableData[] = [];
    if (responseData) {
      for (const item of responseData) {
        selfProperty.push(new StaticTableData(item.code, item.description));
      }
    }
    if (selfProperty.length > 0) {
      switch (attrName) {
        case 'currencies': {
          this.currencies = selfProperty;
          break;
        }
        case 'provinces': {
          this.provinces = selfProperty;
          break;
        }
        case 'countries': {
          this.countries = selfProperty;
          break;
        }
        case 'phoneTypes': {
          this.phoneTypes = selfProperty;
          break;
        }
        case 'FATCATypeClassification': {
          this.FATCATypeClassification = selfProperty;
          break;
        }
        case 'CRSEntityClassification': {
          this.CRSEntityClassification = selfProperty;
          break;
        }
        case 'institutionTypes': {
          this.institutionTypes = selfProperty;
          break;
        }
        case 'recipientCodes': {
          this.recipientCodes = selfProperty;
          break;
        }
        case 'clientClasses': {
          this.clientClasses = selfProperty;
          break;
        }
        case 'addressTypes': {
          this.addressTypes = selfProperty;
          break;
        }
      }
    }
  }
}
