import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyplayerComponent } from './fantasyplayer.component';

describe('FantasyplayerComponent', () => {
  let component: FantasyplayerComponent;
  let fixture: ComponentFixture<FantasyplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantasyplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FantasyplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
