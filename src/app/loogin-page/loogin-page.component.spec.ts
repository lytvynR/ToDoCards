import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LooginPageComponent } from './loogin-page.component';

describe('LooginPageComponent', () => {
  let component: LooginPageComponent;
  let fixture: ComponentFixture<LooginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LooginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LooginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
