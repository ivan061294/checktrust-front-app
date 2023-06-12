import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRequestsProviderComponent } from './report-requests-provider.component';

describe('ReportRequestsProviderComponent', () => {
  let component: ReportRequestsProviderComponent;
  let fixture: ComponentFixture<ReportRequestsProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportRequestsProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportRequestsProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
