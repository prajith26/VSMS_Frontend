import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionadminchatComponent } from './discussionadminchat.component';

describe('DiscussionadminchatComponent', () => {
  let component: DiscussionadminchatComponent;
  let fixture: ComponentFixture<DiscussionadminchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionadminchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionadminchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
