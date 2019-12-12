import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Core2Module extends EnsureModuleLoadedOnceGuard { 
  constructor(@Optional() @SkipSelf() parentModule:Core2Module){
    console.log(parentModule)
    super(parentModule)
  }
}
