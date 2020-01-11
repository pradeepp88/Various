import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardModalPage } from './reward-modal.page';

describe('RewardModalPage', () => {
  let component: RewardModalPage;
  let fixture: ComponentFixture<RewardModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
