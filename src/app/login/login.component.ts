import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  items: Observable<any[]>;
  itemValue = '';
  constructor( private router: Router , public db: AngularFireDatabase , private afAuth: AngularFireAuth) {
    this.items = db.list('items').valueChanges();
  }

  ngOnInit() {
    console.log(this.items);
  }
login() {
  this.router.navigate(['/home']);
}

doGoogleLogin() {
  return new Promise<any>((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    });
  });
}
  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }
}
