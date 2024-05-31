import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';
import { DocsExampleComponent } from '../../components/docs-example/docs-example.component';
import { Publication } from '../publication.model';
import { PublicationService } from '../publication.service';

type CardColor = {
  color: string
  textColor?: string
}
@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, NgTemplateOutlet, CardTitleDirective, CardTextDirective, ButtonDirective, CardSubtitleDirective, CardLinkDirective, RouterLink, ListGroupDirective, ListGroupItemDirective, CardFooterComponent, NavComponent, NavItemComponent, NavLinkDirective, BorderDirective, CardGroupComponent, GutterDirective, CardImgDirective],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent implements OnInit {

  colors: CardColor[] = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  imgContext = { $implicit: 'top', bottom: 'bottom' };

  publicationList: Publication[] = [];
  publicationService: PublicationService = inject(PublicationService);
  filteredpublicationList: Publication[]=[];
    
  constructor(private router: Router){

  }


  verCliente(publicacion: any){
    this.router.navigate(['/publications/create/'+ publicacion.id])
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.publicationService.getPublication().subscribe(
        (data:any)=>{
          this.publicationList = this.filteredpublicationList= data
        },
        error=>{
          console.log("error ->" + error);       
        }
      )
    }, 1000);
 
  }

  
}
