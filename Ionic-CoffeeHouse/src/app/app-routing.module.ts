import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "Login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "Register",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterPageModule)
  },
  {
    path: "reward-modal",
    loadChildren: () =>
      import("./reward-modal/reward-modal.module").then(
        m => m.RewardModalPageModule
      )
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then(m => m.AccountPageModule)
  },
  {
    path: "menu",
    loadChildren: () => import("./menu/menu.module").then(m => m.MenuPageModule)
  },
  {
    path: "menudetail",
    loadChildren: () =>
      import("./menu.detail/menu.detail.module").then(
        m => m.MenuDetailPageModule
      )
  },
  {
    path: "menudetail/:id",
    loadChildren: () =>
      import("./menu.detail/menu.detail.module").then(
        m => m.MenuDetailPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
