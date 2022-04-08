import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePopComponent } from './update-pop.component';

describe('UpdatePopComponent', () => {
  let component: UpdatePopComponent;
  let fixture: ComponentFixture<UpdatePopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
