import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreAlunoComponent } from './are-aluno.component';

describe('AreAlunoComponent', () => {
  let component: AreAlunoComponent;
  let fixture: ComponentFixture<AreAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
