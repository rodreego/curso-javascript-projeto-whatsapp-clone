const firebase = require('firebase');

require('firebase/firestore');

export class Firebase {

    constructor(){

        this._config = {
            
                apiKey: "AIzaSyCfUD9EjEKf_5bRZRuTI8P2Lz2ZtPBRbcA",                
                authDomain: "whatsapp-clone-290af.firebaseapp.com",
                databaseURL: "https://whatsapp-clone-290af.firebaseio.com",
                projectId: "whatsapp-clone-290af",
                storageBucket: "",
                messagingSenderId: "324495320436",
                appId: "1:324495320436:web:3f03080eaefcdc5a"
                
              }
        

        this.init();

    }

    init(){

        if(!window._initializedFirebase){

            firebase.initializeApp(this._config);          

            window._initializedFirebase = true;

        }        
        

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    } 

    initAuth(){

        return new Promise((s,f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(provider).then(result => {

                let token = result.credential.accessToken;

                let user = result.user;

                s({

                    user,
                    token

                });

            }).catch(err=>{

                f(err);

            });

        });
    }

}