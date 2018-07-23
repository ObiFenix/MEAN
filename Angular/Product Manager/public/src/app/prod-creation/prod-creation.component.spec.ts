import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCreationComponent } from './prod-creation.component';

describe('ProdCreationComponent', () => {
  let component: ProdCreationComponent;
  let fixture: ComponentFixture<ProdCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
