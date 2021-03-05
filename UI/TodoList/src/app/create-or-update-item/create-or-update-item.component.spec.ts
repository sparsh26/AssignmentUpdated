import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateItemComponent } from './create-or-update-item.component';

describe('CreateOrUpdateItemComponent', () => {
  let component: CreateOrUpdateItemComponent;
  let fixture: ComponentFixture<CreateOrUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
