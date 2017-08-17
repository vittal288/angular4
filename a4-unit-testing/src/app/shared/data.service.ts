export class DataService{
  getDetails(){
      let resultPromise = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve('Data');
          }, 1500);
      });
      return resultPromise;
  }
}
