import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MockComponent} from "ng-mocks";
import {NavigationComponent} from "./navigation/navigation.component";

// Suite
// xdescribe (exclude)
// fdescribe (focus)
fdescribe('AppComponent', () => {

  // beforeEach Auführen for jeder Spec (it)
  // beforeAll
  // afterEach
  // afterAll
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(NavigationComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {

    // fixture enthält
    // Instanz und DOM
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // instance

    // expectations (assertions)
    // .matcher
    expect(app).toBeTruthy();
  });

  it(`should have as title 'crm'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // property title
    expect(app.title).toEqual('crm');
  });

/*  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('crm app is running!');
  });*/
});
