import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

 

  it('Verificar multiplos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizBuzz(3)).toEqual('Fizz');
  });

  it('Verificar multiplos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizBuzz(1)).toEqual('Fizz');
  });

  it('Verificar multiplos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizBuzz(-10)).toEqual('Fizz');
  });

  it('Verificar multiplos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizBuzz(5)).toEqual('Buzz');
  });

  it('Verificar multiplos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizBuzz(13)).toEqual('Fizz');
  });

  it('Verificar multiplos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizBuzz(15)).toEqual('FizzBuzz');
  });

  it('Verificar multiplos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizBuzz(999)).toEqual('Fizz');
  });

});

