import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// ActionSheetController 从屏幕底部弹出，显示一些选项
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

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

}
