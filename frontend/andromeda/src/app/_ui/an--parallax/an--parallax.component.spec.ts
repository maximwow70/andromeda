import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnParallaxComponent } from './an--parallax.component';

describe('AnParallaxComponent', () => {
  let component: AnParallaxComponent;
  let fixture: ComponentFixture<AnParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
