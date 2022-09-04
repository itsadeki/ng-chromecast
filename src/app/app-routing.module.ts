import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChromecastComponent } from './chromecast/chromecast.component';

const routes: Routes = [{ path: '', component: ChromecastComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
