import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnHeaderComponent } from './an--header.component';

describe('AnHeaderComponent', () => {
  let component: AnHeaderComponent;
  let fixture: ComponentFixture<AnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
