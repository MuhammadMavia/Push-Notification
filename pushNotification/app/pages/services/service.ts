import {Injectable} from 'angular2/core';

@Injectable()
export class Service {
    deviceObj: {id: string} = {id: ''};
    
    getDeviceObj() {
        return this.deviceObj;
    }
}