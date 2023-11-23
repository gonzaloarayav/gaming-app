import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'principal-games',
  standalone: true,
  imports: [
    CommonModule, MaterialModule
  ],
  templateUrl: './principal-games.component.html',
  styleUrl: './principal-games.component.css',
})
export class PrincipalGamesComponent {

 }
