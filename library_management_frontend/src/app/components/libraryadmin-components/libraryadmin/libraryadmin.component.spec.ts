import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryadminComponent } from './libraryadmin.component';

describe('LibraryadminComponent', () => {
  let component: LibraryadminComponent;
  let fixture: ComponentFixture<LibraryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
