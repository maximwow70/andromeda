import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnCdListComponent } from './an--cd-list.component';

describe('AnCdListComponent', () => {
  let component: AnCdListComponent;
  let fixture: ComponentFixture<AnCdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnCdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnCdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
