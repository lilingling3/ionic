import { Component } from '@angular/core';
// NavController 导航页面
import { NavController } from 'ionic-angular';
// ActionSheetController 从屏幕底部弹出，显示一些选项
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController  } from 'ionic-angular';

import { ListPage } from '../list/list'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
itemsBar;
  constructor(public navCtrl: NavController,
  public actionSheetCtrl: ActionSheetController,
  public alertCtrl: AlertController,
  public loadingCtrl: LoadingController
  ) {
     this.initializeItems()
  }
  // brightnes;
  initializeItems() {
    this.itemsBar = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
 items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
goPage(){
  this.navCtrl.push(ListPage)
}
presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  openMenu() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            subTitle:'subTitle',
            // cssClass:'menu', 自定义样式
            // role 有 destructive  cancel 两个值，否则会先显示默认
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                    console.log('Destructive clicked');
                    }
                },{
                     text: 'Archive',
                     handler: () => {
                         console.log('Archive clicked');
                     }
                 },{
                     text: 'Cancel',
                     role: 'cancel',
                     handler: () => {
                         console.log('Cancel clicked');
                     }
                 }
             ]
         });
            actionSheet.present();
    }

   showBasicAlert(){
       let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
   }

    showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        // this.testCheckboxOpen = false;
        // this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
 change(){
   console.log('复选框状态发生变化了')
 }
}
