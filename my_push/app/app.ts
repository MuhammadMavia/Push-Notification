import {App, Platform} from 'ionic-angular';
import {Push} from 'ionic-native';
import {HomePage} from './pages/home/home';


@App({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    rootPage:any = HomePage;

    constructor(platform:Platform) {
        platform.ready().then(() => {
            var push = Push.init({
                android: {
                    //forceShow: false,
                    senderID: '806781164752',
                    alert: true,
                    badge: true,
                    //icon: "drawable-hdpi-icon",
                    sound: true,
                    vibrate: true
                },
                ios: {
                    alert: "true",
                    badge: true,
                    sound: 'false'
                },
                windows: {}
            });
            Push.hasPermission().then((data) => {
                console.log(data);
            });
            push.on('registration', function (data) {
                console.log(data);
            });
            push.on('notification', (data) => {
                console.log(data);
                alert("console.log(data)")
            });

            push.on('error', (e) => {
                console.log('PUSH PLUGIN ERROR: ' + e);
            });
        });
    }
}
