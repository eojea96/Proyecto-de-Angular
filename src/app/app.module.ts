import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormFirstComponent } from '././components/form-first/form-first.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { GestionarUsuariosComponent } from './components/gestionar-usuarios/gestionar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFirstComponent,
    GestionarUsuariosComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
