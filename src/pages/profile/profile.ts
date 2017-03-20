import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ProfileData } from '../../providers/profile.data'
//import { ConnectionsPage } from '../connections/connections';
import { AuthProvider } from '../../providers/auth.provider'
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    private profileData
    private userProfile: any;
    private birthDate: string;

    constructor(public nav: NavController, private profile: ProfileData,
      private authData: AuthProvider, private alertCtrl:AlertController) {
      this.nav = nav;
      this.profileData = profile;

      this.profileData.getUserProfile().on('value', (data) => {
        this.userProfile = data.val();
        this.birthDate = this.userProfile.birthDate;
            });
        }

    logOut(): void {
      this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
          });
      }
      //creates prompt to edit your name.
      updateName(): void {
          let alert = this.alertCtrl.create({
          message: "Your first name & last name",
          inputs: [
            {
              name: 'firstName',
              placeholder: 'Your first name',
              value: this.userProfile.firstName
            },
            {
              name: 'lastName',
              placeholder: 'Your last name',
              value: this.userProfile.lastName
            },
          ],
          buttons: [
            {
              text: 'Cancel',
            },
            {
              text: 'Save',
              handler: data => {
                this.profileData.updateName(data.firstName, data.lastName);
              }
            }
          ]
        });
        alert.present();
      }
      //method for updating method
      updateDOB(birthDate): void {
        this.profileData.updateDOB(birthDate);
        }
      //prompts to update email.
      updateEmail(): void {
        let alert = this.alertCtrl.create({
          inputs: [
            {
              name: 'newEmail',
              placeholder: 'Your new email',
            },
          ],
          buttons: [
            {
              text: 'Cancel',
            },
            {
              text: 'Save',
              handler: data => {
                this.profileData.updateEmail(data.newEmail);
              }
            }
          ]
        });
        alert.present();
      }
      updatePassword(){
        let alert = this.alertCtrl.create({
          inputs: [
            {
              name: 'newPassword',
              placeholder: 'Your new password',
              type: 'password'
            },
          ],
          buttons: [
            {
              text: 'Cancel',
            },
            {
              text: 'Save',
              handler: data => {
                this.profileData.updatePassword(data.newPassword);
              }
            }
          ]
        });
        alert.present();
      }

}
