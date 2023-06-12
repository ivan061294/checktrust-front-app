import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { ValidarTipoUserGuard } from '../guards/validar-tipo-user.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MpProcDisciplinComponent } from './pages/mp-proc-disciplin/mp-proc-disciplin.component';
import { PjProcDisciplinComponent } from './pages/pj-proc-disciplin/pj-proc-disciplin.component';
import { PjRegDeudoresComponent } from './pages/pj-reg-deudores/pj-reg-deudores.component';
import { ReportRequestsProviderComponent } from './pages/report-requests-provider/report-requests-provider.component';
import { SenInfoFinancieraComponent } from './pages/sen-info-financiera/sen-info-financiera.component';
import { SenListaRestricComponent } from './pages/sen-lista-restric/sen-lista-restric.component';
import { SenSancionadosOsceComponent } from './pages/sen-sancionados-osce/sen-sancionados-osce.component';
import { SerSancionesComponent } from './pages/ser-sanciones/ser-sanciones.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'seninfofin', component: SenInfoFinancieraComponent},
      {path: 'senlisrestric', component: SenListaRestricComponent},
      {path: 'sensanosce', component: SenSancionadosOsceComponent},
      {path: 'pjprocdisc', component: PjProcDisciplinComponent},
      {path: 'pjregdudo', component: PjRegDeudoresComponent},
      {path: 'mpprocdisc', component: MpProcDisciplinComponent},
      {path: 'sersanciones', component: SerSancionesComponent},
      {path: 'usuarios', component: UsersComponent, canActivate: [ ValidarTipoUserGuard ], canLoad: [ ValidarTipoUserGuard ]},
      {path: 'reporteconsultas', component: ReportRequestsProviderComponent, canActivate: [ ValidarTipoUserGuard ], canLoad: [ ValidarTipoUserGuard ]},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
