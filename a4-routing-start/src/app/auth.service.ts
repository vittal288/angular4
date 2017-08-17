export class AuthService{
    public loggedIn:boolean;

    isAuthenticated(){
        const promise = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn);
                },800)
        });

        return promise;
    }
    login(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }
}