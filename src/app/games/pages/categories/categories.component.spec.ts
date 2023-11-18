import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example1Component } from './categories.component';

describe('Example1Component', () => {
  let component: Example1Component;
  let fixture: ComponentFixture<Example1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
