import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Menu.DetailPage } from './menu.detail.page';

describe('Menu.DetailPage', () => {
  let component: Menu.DetailPage;
  let fixture: ComponentFixture<Menu.DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu.DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Menu.DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
