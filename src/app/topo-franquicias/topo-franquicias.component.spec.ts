import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoFranquiciasComponent } from './topo-franquicias.component';

describe('TopoFranquiciasComponent', () => {
  let component: TopoFranquiciasComponent;
  let fixture: ComponentFixture<TopoFranquiciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopoFranquiciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopoFranquiciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
