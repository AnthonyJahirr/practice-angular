import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})

export class BarraLateralComponent {
  @Input() item1: string | undefined; // decorate the property with @Input()
}
