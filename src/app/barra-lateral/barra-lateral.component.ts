import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})

export class BarraLateralComponent {
  @Input() messageblue1: string = ''; // decorate the property with @Input()
  @Input() messageblue2: string = '';
  @Input() messageblack1: string = '';
  @Input() messageblack2: string = '';
}
