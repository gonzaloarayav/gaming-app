import { MaterialModule } from './shared/material.module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/navbar/components/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gaming-app';


}



// import { Component, OnInit } from '@angular/core';
// import { TranslateService, TranslateModule,  TranslateStore, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { MaterialModule } from './shared/material.module';
// import { RouterOutlet } from '@angular/router';
// import { SidebarComponent } from './shared/navbar/components/sidebar/sidebar.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// @Component({
//   selector: 'app-root',
//   providers: [TranslateService, TranslateStore],
//   templateUrl: './app.component.html',

//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   title = 'gaming-app';

//   constructor(private translate: TranslateService) {
//     // Configura el idioma predeterminado aquí si es necesario
//     this.translate.setDefaultLang('es');
//   }

//   ngOnInit() {
//     this.translate.use('es');
//   }
// }

