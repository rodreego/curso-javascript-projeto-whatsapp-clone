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

        if(!this._initialized){

            firebase.initializeApp(this._config);

            firebase.firestore().settings({

                timestampsInSnapshots: true

            })

            this._initialized = true;

        }        
        

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    } 


}