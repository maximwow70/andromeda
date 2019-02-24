import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnHomeComponent } from './an--home.component';

describe('AnHomeComponent', () => {
  let component: AnHomeComponent;
  let fixture: ComponentFixture<AnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
