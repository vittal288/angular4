import { Injectable, Inject, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SharedService {

    private behaviorSubject = new BehaviorSubject<{}>([]);
    public bookTitleOrAuthorSearchEvent = new EventEmitter<string>();

    setData(data) {
        this.behaviorSubject.next(data);
    }

    getData() {
        return this.behaviorSubject.getValue();
    }

    storeToSession(key: string, value: any) {
        if (sessionStorage) {
            sessionStorage.setItem(key, JSON.stringify(value));
        } else {
            alert('your browser is not supporting the Session Storage !!!')
            // commented due circular dependcy injection issue
            // this.toasterService.showToaster('info', 'Information', 'your browser is not supporting the Session Storage !!!')
        }
    }

    getFromSession(key: string) {
        if (sessionStorage.getItem(key) !== '') {
            return JSON.parse(sessionStorage.getItem(key));
        }

    }

    removeSessionItem(key) {
        sessionStorage.removeItem(key);
    }

    storeToLocalStorage(key: string, value: any) {
        if (localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            alert('your browser is not supporting the Local Storage !!!')
            // commented due circular dependcy injection issue
            // this.toasterService.showToaster('info', 'Information', 'your browser is not supporting the Local Storage !!!')
        }
    }

    getFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    removeLocalStorageItem(key) {
        localStorage.removeItem(key)
    }

    clearSession() {
        sessionStorage.clear();
    }

    clearLocalStorage() {
        localStorage.clear();
    }

    // return true if passing object is an empty or else false
    isEmpty(obj) {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return true;
            }else {
                return false ;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }

    checkObjForNullAndEmpty(obj: any): boolean {
        if (!this.isEmpty(obj) && obj !== null && obj !== undefined) {
            return true;
        } else {
            return false;
        }
    }
}
