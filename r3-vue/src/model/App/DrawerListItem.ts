export default class DrawerListItem {
  public title: string;
  public icon: string;
  public redirectPageName: string;
  constructor(title: string, icon: string, redirectPageName: string) {
    this.title = title;
    this.icon = icon;
    this.redirectPageName = redirectPageName;
  }
}
