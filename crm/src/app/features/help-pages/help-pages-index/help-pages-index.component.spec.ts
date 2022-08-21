import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPagesIndexComponent } from './help-pages-index.component';

describe('HelpPagesIndexComponent', () => {
  let component: HelpPagesIndexComponent;
  let fixture: ComponentFixture<HelpPagesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpPagesIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpPagesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
