import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {ListPage} from './pages/list/list';
import {Push} from 'ionic-native';
import {Service} from './pages/services/service';


@App({
    templateUrl: 'build/app.html',
    providers: [Service],
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
    rootPage:any = GettingStartedPage;
    pages:Array<{ title: string, component: any }>

    constructor(private app:IonicApp, private platform:Platform, private service:Service) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Getting Started', component: GettingStartedPage},
            {title: 'List', component: ListPage}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            //Okay, so the platform is ready and our plugins are available.
            //Here you can do any higher level native things you might need.

            /* StatusBar.styleDefault();

             var push = Push.init({
             android: {
             senderID: "806781164752"
             },
             ios: {
             alert: "true",
             badge: true,
             sound: 'false'
             },
             windows: {}
             });
             console.log('aaaaaaaaaaaaaaaaaaaaaaa');
             // alert('aaaaaaaaaaaaaaaaaaaaaaa');




             Push.hasPermission().then((data) => {
             if (data.isEnabled) {
             console.log('isEnabled');
             } else {
             console.log('not Enabled');
             }
             });
             console.log('bbbbbbbbbbbbbbbbbb');

             push.on('registration', (data) => {
             console.log('dataaaaaaaaaaaaaaa');
             console.log(data.registrationId);
             this.pages.push({ title: data.registrationId, component: ListPage });
             this.service.deviceObj.id = data.registrationId;
             });

             // push.on('registration', function(data) {
             //     //localStorage.gcm = data.registrationId;
             //     console.log("SUPER GCM_ID = " + data.registrationId);
             // });
             console.log('notificationnnnnn')
             push.on('notification', (data) => {
             // Foreground
             if (data.additionalData.foreground) {
             console.log('foreground');
             //buildPush(data);
             }
             });

             push.on('error', (e) => {
             console.log('PUSH PLUGIN ERROR: ' + e.message);
             });

             //  .hasPermission(function(data) {
             //
             // });*/
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
