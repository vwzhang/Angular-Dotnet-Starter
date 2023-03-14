export interface INavItem {
  label: string;
  link: string;
}

export interface IAppDef {
  name: string;
  navList: INavItem[];
}
