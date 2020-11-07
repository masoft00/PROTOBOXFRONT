import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { PdfGeneratorService } from 'src/app/services/PdfGenerator/pdf-generator.service';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit {

  constructor(
    private pdfService: PdfGeneratorService,
  ) { }

  ngOnInit() {
  }

  //Cette methode me permet de se connecter à mon API
  onGenerate(data) {
    this.pdfService.pdfgen(data)
      .subscribe(resp => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'pdf Generale'
        })
      }, err => {
        Swal.fire(
          'Veuillez mettre du contenue',
          'SVP',
          'error'
        )
      });
  }

}
