import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProfessorComponent } from './area-professor.component';

describe('AreaProfessorComponent', () => {
  let component: AreaProfessorComponent;
  let fixture: ComponentFixture<AreaProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
