import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwError } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    
    console.log('parentModule',parentModule)
    this.throwIfAlreadyLoaded(parentModule,`CoreModule`)
    //@Optional : a constructor paramater decorator that makes a dependency as optional
    //@SkipSelf : go to the parent injector and see if we can import a core module
  }
  throwIfAlreadyLoaded(parentModule:any,moduleName:string){
    if(parentModule){
      throw new Error(`${moduleName} has already been loaded. Import core module in the app module only.`)
    }
  }
}
