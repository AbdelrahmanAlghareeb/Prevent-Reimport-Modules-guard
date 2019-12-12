export class EnsureModuleLoadedOnceGuard {
    constructor(targetModule:any){
        if(targetModule)
        {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import core module in the app module only.`)
        }
    }
}
