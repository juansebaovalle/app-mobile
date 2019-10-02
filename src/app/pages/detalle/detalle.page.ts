import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  tituloPagina: string = "Persona";
  datos = null;
  datos2 = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.datos = this.activatedRoute.snapshot.paramMap.get('userId');
    this.datos2 = this.activatedRoute.snapshot.paramMap.get('otro');
    console.log(this.datos);
    console.log(this.datos2);
  }

}
