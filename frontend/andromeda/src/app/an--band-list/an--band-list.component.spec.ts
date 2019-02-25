import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnBandListComponent } from './an--band-list.component';

describe('AnBandListComponent', () => {
  let component: AnBandListComponent;
  let fixture: ComponentFixture<AnBandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnBandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnBandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
