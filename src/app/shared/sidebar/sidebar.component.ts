import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Menu } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: Menu[];

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menu;
  }

  ngOnInit(): void {
  }

}
