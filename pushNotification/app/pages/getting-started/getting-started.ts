import {Page} from 'ionic-angular';
// import {Push} from 'ionic-native';
import {Service} from '../services/service';



@Page({
    templateUrl: 'build/pages/getting-started/getting-started.html',
    providers: [Service]
})
export class GettingStartedPage {
    obj = {id: ''};
    constructor(private service: Service) {
        this.obj = this.service.deviceObj
            

        // push.on('notification', function(data) {
        //     console.log(data.message);
        //     console.log(data.title);
        //     console.log(data.count);
        //     console.log(data.sound);
        //     console.log(data.image);
        //     console.log(data.additionalData);
        // });

        // push.on('error', function(e) {
        //     console.log(e.message);
        // });

    }
}
