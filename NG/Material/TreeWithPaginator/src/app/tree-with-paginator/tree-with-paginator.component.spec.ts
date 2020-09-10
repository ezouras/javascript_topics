import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWithPaginatorComponent } from './tree-with-paginator.component';

describe('TreeWithPaginatorComponent', () => {
  let component: TreeWithPaginatorComponent;
  let fixture: ComponentFixture<TreeWithPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeWithPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeWithPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
