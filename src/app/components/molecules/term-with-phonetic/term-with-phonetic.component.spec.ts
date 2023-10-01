import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermWithPhoneticComponent } from './term-with-phonetic.component';

describe('TermWithPhoneticComponent', () => {
  let component: TermWithPhoneticComponent;
  let fixture: ComponentFixture<TermWithPhoneticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TermWithPhoneticComponent]
    });
    fixture = TestBed.createComponent(TermWithPhoneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
