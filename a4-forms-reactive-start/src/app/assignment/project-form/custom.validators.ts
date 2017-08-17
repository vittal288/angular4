import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
export class CuaromValidator{
    private forbiddenProjectNames=['Test'];

    //Static method : no need to create instance of that class, directly we can access using class name    
    static inValidProjectName(control:FormControl):{[s:string]:boolean}{
    //if(this.forbiddenProjectNames.indexOf(control.value)!== -1){
    if(control.value === 'Test'){
      return {'forbiddenProjectName':true}
    }
    return null;
  }

   //custom asynch validaotor, if vlaues are fetching from server
  static forbiddenEmailAsynchValidator(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{        
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'forbiddenProjectName':true})
        }else{
          resolve(null)
        }
      },1500)
    })
    return promise;
  }
}