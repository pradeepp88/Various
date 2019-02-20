import ThemeUnit from '@/model/ThemeSelector/ThemeUnit';

export default class Theme {
  public Name?: string;
  public Primary?: string;
  public Secondary?: string;
  public Accent?: string;
  public Error?: string;
  public Info?: string;
  public Success?: string;
  public Warning?: string;
  public Drawer?: ThemeUnit;
  public MainToolbar?: ThemeUnit;
  public Toolbar1?: ThemeUnit;
  public Toolbar2?: ThemeUnit;
  public Toolbar3?: ThemeUnit;
  public Toolbar4?: ThemeUnit;
  public ToolbarSpecialColor?: string;
  public LoaderColor?: string;
  public AppDark?: boolean;

  constructor(params: any = {} as Theme) {
    const {
      Name = 'Default',
      Primary = '#1976D2',
      Secondary = '#424242',
      Accent = '#82B1FF',
      Error = '#FF5252',
      Info = '#2196F3',
      Success = '#4CAF50',
      Warning = '#FFC107',
      Drawer = new ThemeUnit(),
      MainToolbar = new ThemeUnit(),
      Toolbar1 = new ThemeUnit({ isDark: true, color: 'primary darken-1' }),
      Toolbar2 = new ThemeUnit({ isDark: true, color: 'primary' }),
      Toolbar3 = new ThemeUnit({ isDark: true, color: 'success' }),
      Toolbar4 = new ThemeUnit({ isDark: true, color: 'orange' }),
      ToolbarSpecialColor = 'warning',
      LoaderColor = 'warning',
      AppDark = true,
    } = params;
    this.Name = Name;
    this.Primary = Primary;
    this.Secondary = Secondary;
    this.Accent = Accent;
    this.Error = Error;
    this.Info = Info;
    this.Success = Success;
    this.Warning = Warning;
    this.Drawer = Drawer;
    this.MainToolbar = MainToolbar;
    this.Toolbar1 = Toolbar1;
    this.Toolbar2 = Toolbar2;
    this.Toolbar3 = Toolbar3;
    this.Toolbar4 = Toolbar4;
    this.ToolbarSpecialColor = ToolbarSpecialColor;
    this.LoaderColor = LoaderColor;
    this.AppDark = AppDark;
  }

  public getThemeAttr(attrName: string) {
    if (attrName === 'AppDark') {
      return this.AppDark;
    } else if (attrName === 'Drawer') {
      return this.Drawer;
    } else if (attrName === 'MainToolbar') {
      return this.MainToolbar;
    } else if (attrName === 'Toolbar1') {
      return this.Toolbar1;
    } else if (attrName === 'Toolbar2') {
      return this.Toolbar2;
    } else if (attrName === 'Toolbar3') {
      return this.Toolbar3;
    } else if (attrName === 'Toolbar4') {
      return this.Toolbar4;
    } else if (attrName === 'ToolbarSpecialColor') {
      return this.ToolbarSpecialColor;
    } else if (attrName === 'LoaderColor') {
      return this.LoaderColor;
    }
  }
}
