class CameraController{

    constructor(videoEL){

        this._videoEl = videoEL;

        navigator.mediaDevices.getUserMedia({

            video: true

        }).then(screenStream=>{

            this._videoEl.srcObject = screenStream;

            this._videoEl.play();

        }).catch(err=>{

            console.error(err);

        });

    }

}