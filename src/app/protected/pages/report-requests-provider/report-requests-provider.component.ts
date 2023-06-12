import { Component, OnInit } from '@angular/core';
import {
  classColContent_Center,
  classColContent_Left,
  classColContent_Right,
  msgSinInformacion,
  strClassColHead1,
  strClassColHead2,
  strClassColHead3,
} from 'src/app/common/constants/common.constants';
import { CommonService } from 'src/app/common/services/common.service';
import { ProtectedService } from '../../services/protected.service';
@Component({
  selector: 'app-report-requests-provider',
  templateUrl: './report-requests-provider.component.html',
  styleUrls: ['./report-requests-provider.component.css'],
})
export class ReportRequestsProviderComponent implements OnInit {
  cabeceraConsultas: string[][] = [];
  messageError: string = '';

  cabeceraUsuarios: string[][] = [];

  strClassColHead1: string = strClassColHead1;
  strClassColHead2: string = strClassColHead2;
  strClassColHead3: string = strClassColHead3;
  msgSinInformacion: string = msgSinInformacion;

  datosEncontrados: boolean = false;
  errorBusqueda: boolean = false;
  inibusqueda: boolean = false;
  sinDatosEncontrados: boolean = false;

  classColContent_Left: string = classColContent_Left;
  classColContent_Center: string = classColContent_Center;
  classColContent_Right: string = classColContent_Right;

  linkSelf: string = '';
  linkFirst: string = '';
  linkLast: string = '';
  linkNext: string = '';
  linkPrev: string = '';
  requestProviders: any = [];
  constructor(
    private protecService: ProtectedService,
    public commonService: CommonService
  ) {}
  ngOnInit(): void {
    this.cabeceraConsultas = this.commonService.consultaRequerimientos;
    this.getRequestsProviders();
  }
  getRequestsProviders() {
    let href = '/api/v1/data-provider-request';
    this.inibusqueda = true;
    this.datosEncontrados = false;
    this.errorBusqueda = false;

    this.protecService.buscarPeticionesProveddores(href).subscribe(
      (data) => {
        console.log(data);
        this.requestProviders = data;
        this.inibusqueda = false;
        this.sinDatosEncontrados = false;

        if (this.requestProviders.length) {
          this.datosEncontrados = true;
        } else {
          this.sinDatosEncontrados = true;
        }
      },
      (err) => {
        //(err: HttpErrorResponse)
        const msgError = this.commonService.obtenerStatusDescriptionMsgError(
          err.status,
          err.error
        );
        this.errorBusqueda = true;
        this.inibusqueda = false;
      }
    );
  }

}
