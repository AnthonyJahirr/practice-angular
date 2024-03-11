import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntermediateComponent } from './home-intermediate.component';

describe('HomeIntermediateComponent', () => {
  let component: HomeIntermediateComponent;
  let fixture: ComponentFixture<HomeIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIntermediateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
