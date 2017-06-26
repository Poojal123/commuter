import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from "../../providers/auth/auth"
// import kidsData  from "../../data/kidsData"
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
public userProfile
 constructor(public navCtrl: NavController, db: AngularFireDatabase,public auth:AuthProvider) {
       this.auth.getUserProfile().then()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.auth.getUserProfile().then( profileSnap => {
                    this.userProfile = profileSnap;
                    console.log("hello "+this.userProfile.username)
                    // this.birthDate = this.userProfile.birthDate;
                  });
  }
   items: FirebaseListObservable<any[]>;

    private values: Array<any> = [];
    private anyErrors: boolean;
    private finished: boolean;
    value :Array<any> = [];


  // subscriptionPage = SubscriptionPage;
  // kidsphotosPage = KidsPhotosPage;
  // kidsvideosPage = KidsVideosPage;
  // announcementPage = AnnouncementPage;

  KidsData;
goToPage(page:any){
    this.navCtrl.push(page);
  }

  ngOnInit(){
    this.KidsData = [
  {
    "index": 0,
    "name": "Manuela Martinez",
    "parents": "Richard Becker",
    "profilePic": "./assets/images/kidsData/kid1.jpg",
    "age": 4,
    "allpic": [
        {
          'id':1,
          'pic':"./assets/images/kidsData/kid1.1.jpg"
        },
        {
          'id':2,
          'pic':"./assets/images/kidsData/kid1.2.jpg"
        },
        {
          'id':3,
          'pic':"./assets/images/kidsData/kid1.1.jpg"
        },
        {
          'id':4,
          'pic':"./assets/images/kidsData/kid1.2.jpg"
        },
        {
          'id':5,
          'pic':"./assets/images/kidsData/kid1.1.jpg"
        }
      ],
    "allvid":[
        {
          'id':1,
          'vid':"./assets/images/kidsData/kid1.2.jpg"
        },
        {
          'id':2,
          'vid':"./assets/images/kidsData/kid1.1.jpg"
        }
      ]
  },

  {
    "index": 1,
    "name": "Martinez James",
    "parents": "Moore Sanford",
    "profilePic": "./assets/images/kidsData/kid2.jpg",
    "age": 6,
    "allpic": [
        {
          'id':1,
          'pic':"./assets/images/kidsData/kid2.1.jpg"
        },
        {
          'id':2,
          'pic':"./assets/images/kidsData/kid2.2.jpg"
        }
      ],
    "allvid":[
        {
          'id':1,
          'vid':"./assets/images/kidsData/kid2.2.jpg"
        },
        {
          'id':2,
          'vid':"./assets/images/kidsData/kid2.1.jpg"
        },
        {
          'id':3,
          'vid':"./assets/images/kidsData/kid2.2.jpg"
        },
        {
          'id':4,
          'vid':"./assets/images/kidsData/kid2.1.jpg"
        }
      ]
  },


  {
    "index": 2,
    "name": "Lindsey Aguirre",
    "parents": "Ramos Dominguez",
    "profilePic": "./assets/images/kidsData/kid3.jpg",
    "age": 4,
    "allpic": [
        {
          'id':1,
          'pic':"./assets/images/kidsData/kid3.1.jpg"
        },
        {
          'id':2,
          'pic':"./assets/images/kidsData/kid3.2.jpg"
        }
      ],
    "allvid":[
        {
          'id':1,
          'vid':"./assets/images/kidsData/kid3.2.jpg"
        },
        {
          'id':2,
          'vid':"./assets/images/kidsData/kid3.1.jpg"
        }
      ]
  },

  {
    "index": 3,
    "name": "Gross Cleveland",
    "parents": "Oliver Sweeney",
    "profilePic": "./assets/images/kidsData/kid4.jpg",
    "age": 3,
    "allpic": [
        {
          'id':1,
          'pic':"./assets/images/kidsData/kid4.1.jpg"
        },
        {
          'id':2,
          'pic':"./assets/images/kidsData/kid4.2.jpg"
        }
      ],
    "allvid":[
        {
          'id':1,
          'vid':"./assets/images/kidsData/kid4.2.jpg"
        },
        {
          'id':2,
          'vid':"./assets/images/kidsData/kid4.1.jpg"
        }
      ]
  },

  {
    "index": 4,
    "name": "Kidd Fox",
    "parents":"Christensen Mcneil",
    "profilePic": "./assets/images/kidsData/kid6.jpg",
    "age": 5,
    "allpic": [
        {
          'id':1,
          'pic':"./assets/images/kidsData/kid6.1.jpg"
        },
        {
          'id':2,
          'pic':"./assets/images/kidsData/kid6.2.jpg"
        }
      ],
    "allvid":[
        {
          'id':1,
          'vid':"./assets/images/kidsData/kid6.2.jpg"
        },
        {
          'id':2,
          'vid':"./assets/images/kidsData/kid6.1.jpg"
        }
      ]
  }

];
  }

}