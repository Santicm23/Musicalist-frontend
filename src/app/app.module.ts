import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuComponent } from './components/menu/menu.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { HomeComponent } from './pages/home/home.component'
import { FormInputComponent } from './components/form-input/form-input.component'
import { ToastWarningComponent } from './components/toast-warning/toast-warning.component'
import { AdminComponent } from './pages/admin/admin.component'
import { TitleComponent } from './components/title/title.component'
import { HeaderAdminComponent } from './pages/admin/components/header-admin/header-admin.component'
import { TableGenerosComponent } from './pages/admin/components/table-generos/table-generos.component'
import { TableCancionesComponent } from './pages/admin/components/table-canciones/table-canciones.component'
import { ButtonEditComponent } from './pages/admin/components/button-edit/button-edit.component'
import { ButtonDeleteComponent } from './pages/admin/components/button-delete/button-delete.component';
import { ButtonSaveComponent } from './pages/admin/components/button-save/button-save.component';
import { ButtonCancelComponent } from './pages/admin/components/button-cancel/button-cancel.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    HomeComponent,
    FormInputComponent,
    ToastWarningComponent,
    AdminComponent,
    TitleComponent,
    HeaderAdminComponent,
    TableGenerosComponent,
    TableCancionesComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
