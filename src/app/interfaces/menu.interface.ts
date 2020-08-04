export interface Menu {
  titulo: string;
  icono: string;
  submenu?: SubMenu[];
}

interface SubMenu {
  titulo: string;
  url: string;
}
