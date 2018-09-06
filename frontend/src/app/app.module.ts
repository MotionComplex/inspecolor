import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// 3rd party modules
import { ColorPickerModule } from 'ngx-color-picker';

// Custom modules
import { MaterialExportModule } from './material.module';

// Custom components
import { AppComponent } from './app.component';
import { ColorsComponent } from './components/colors/colors.component';

// Cusrom services
import { ColorService } from './services/colors-api.service';

const ROUTES: Routes = [
  {
      path: 'colors',
      component: ColorsComponent
  },
  {
      path: '',
      redirectTo: 'colors',
      pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ColorPickerModule,

    MaterialExportModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
  }
}
