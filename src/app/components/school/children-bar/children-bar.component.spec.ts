import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenBarComponent } from './children-bar.component';

describe('ChildrenBarComponent', () => {
  let component: ChildrenBarComponent;
  let fixture: ComponentFixture<ChildrenBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
