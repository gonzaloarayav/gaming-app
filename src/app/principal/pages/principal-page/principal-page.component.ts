import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [
    CommonModule, MaterialModule
  ],
  templateUrl: 'principal-page.component.html',
})
export class PrincipalPageComponent { }
