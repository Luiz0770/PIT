import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeKidsPage } from './home-kids.page';

describe('HomeKidsPage', () => {
  let component: HomeKidsPage;
  let fixture: ComponentFixture<HomeKidsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeKidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
