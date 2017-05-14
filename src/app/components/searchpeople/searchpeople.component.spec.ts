import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpeopleComponent } from './searchpeople.component';

describe('SearchpeopleComponent', () => {
  let component: SearchpeopleComponent;
  let fixture: ComponentFixture<SearchpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
