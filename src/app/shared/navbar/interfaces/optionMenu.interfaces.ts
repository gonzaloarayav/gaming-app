export interface MenuOption {
  label: string;
  link: string;
  icon?: string;
}

export interface MenuModel {
  options: MenuOption[];
}
