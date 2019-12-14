import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GiftRandomPickerSharedModule } from 'app/shared/shared.module';
import { GiftRandomPickerCoreModule } from 'app/core/core.module';
import { GiftRandomPickerAppRoutingModule } from './app-routing.module';
import { GiftRandomPickerHomeModule } from './home/home.module';
import { GiftRandomPickerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GiftRandomPickerSharedModule,
    GiftRandomPickerCoreModule,
    GiftRandomPickerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GiftRandomPickerEntityModule,
    GiftRandomPickerAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class GiftRandomPickerAppModule {}
