export default class ThemeUnit {
  public isDark?: boolean;
  public color?: string;
  constructor(params: any = {} as ThemeUnit) {
    const {
      isDark = false,
      color = '',
    } = params;
    this.isDark = isDark;
    this.color = color;
  }
}
