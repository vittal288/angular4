export class LoggingService{
    logStatusChange(status:string){
        console.log('FROM SERVICE : A server status changed, new status: ' + status);
    }
}