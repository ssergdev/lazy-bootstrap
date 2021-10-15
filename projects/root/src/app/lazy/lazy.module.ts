import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModule as ElementModule} from "../../../../element/src/app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { LazyComponent } from './lazy.component';
import {RouterModule, Routes} from "@angular/router";

platformBrowserDynamic().bootstrapModule(ElementModule)
  .catch(err => console.error(err));

const routes: Routes = [
  {path: '', component: LazyComponent}
]
@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LazyModule { }
