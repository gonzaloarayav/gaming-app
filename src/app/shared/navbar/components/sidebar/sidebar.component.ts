import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuOption } from '../../interfaces/optionMenu.interfaces';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule,
    MaterialModule, RouterLink, RouterLinkActive, RouterOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public listMenu: MenuOption[] = [
    {label: 'Home', link: '', icon: 'fa-solid fa-home'},
    {label: 'Categorias', link: '/categories', icon:'fa-solid fa-gamepad'},
    {label: 'Nosotros', link: '/about', icon: 'fa-solid fa-user-group'},

  ];

  ngOnInit(): void {

  }

}
