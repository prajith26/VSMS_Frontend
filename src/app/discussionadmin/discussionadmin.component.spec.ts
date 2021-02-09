import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionadminComponent } from './discussionadmin.component';

describe('DiscussionadminComponent', () => {
  let component: DiscussionadminComponent;
  let fixture: ComponentFixture<DiscussionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
