import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatctComponent } from './contatct.component';

describe('ContatctComponent', () => {
  let component: ContatctComponent;
  let fixture: ComponentFixture<ContatctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
