import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'
import { HomeComponent } from './pages/home/home.component'
import { AdminComponent } from './pages/admin/admin.component'
import { GeneroComponent } from './pages/genero/genero.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home/:uid', component: HomeComponent },
  { path: 'home/:uid/genero/:gid', component: GeneroComponent },
  { path: 'admin/:uid', component: AdminComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
