export default class AddClientPersonalDetail {
  public firstName: string = '';
  public middleName: string = '';
  public lastName: string = '';
  public DOB: string = '';
  public email: string = '';
  public gender: string = '';
  public language: string = '';
  public title: number = 0;
  public SIN: string = '';

  public setMockData() {
    this.firstName = 'R3MockFN';
    this.lastName = 'R3MockLN';
    this.middleName = 'R3MockMN';
    this.DOB = '2011-12-24';
    this.email = 'R3@gmail.com';
    this.gender = 'Male';
    this.language = 'English';
    this.SIN = '';
  }
}
