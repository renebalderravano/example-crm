import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../publication.service';
import { Publication } from '../publication.model';
import { CurrencyPipe, Location } from '@angular/common';

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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer-publication',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CurrencyPipe, CommonModule, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, NgTemplateOutlet, CardTitleDirective, CardTextDirective, ButtonDirective, CardSubtitleDirective, CardLinkDirective, RouterLink, ListGroupDirective, ListGroupItemDirective, CardFooterComponent, NavComponent, NavItemComponent, NavLinkDirective, BorderDirective, CardGroupComponent, GutterDirective, CardImgDirective],
  templateUrl: './customer-publication.component.html',
  styleUrl: './customer-publication.component.scss'
})
export class CustomerPublicationComponent {

  
  public favoriteColor = '#26ab3c';
  route: ActivatedRoute = inject(ActivatedRoute);
  publicationService = inject(PublicationService);
  publication: Publication | undefined;

  
  
  customerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    cellphone: new FormControl(''),
    email: new FormControl(),
    publication: new FormControl()
  });
  customerService: CustomerService = inject(CustomerService);

  isEdit: boolean = false;

  constructor(private location: Location) {
    console.log(this.location.getState());

    const publicationId = Number(this.route.snapshot.params['id']);

    this.publicationService.getPublicationById(publicationId).subscribe(
      data=>{
        this.publication = data
      }
    );

    let data = this.location.getState() as any;

    if (typeof data !== 'undefined' && data.hasOwnProperty('id'))  {
        this.isEdit = true
        this.customerForm.get('id')?.setValue(data.id);
        this.customerForm.get('name')?.setValue(data.name);
        this.customerForm.get('city')?.setValue(data.city);
        this.customerForm.get('state')?.setValue(data.state);
        this.customerForm.get('cellphone')?.setValue(data.cellphone);
        this.customerForm.get('email')?.setValue(data.email);
        this.customerForm.get('publication')?.setValue(data.publication);
      }



  }
  onSubmit() {
    this.customerForm.get('publication')?.setValue(this.publication)

    this.customerService.saveCustomer(this.customerForm.value).subscribe(
      res => {

        this.customerForm.reset();
        console.log('Guardado con id: ' + res.id)
        alert('Guardado Exitosamente')
      },
      error => {
        console.error(error.message)
      }
    )
    console.warn(this.customerForm.value);
  }
}
