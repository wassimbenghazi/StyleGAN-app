import { Component, OnInit } from '@angular/core';
import { AiTestService } from '../ai-test.service';
import { FlowerService } from '../flower.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
   
    sliderValue1:number = 0;
    sliderValue2:number = 0;
    sliderValue3:number = 0;
    
    
      img_to_prediction: File
      show:boolean=false
      show2:boolean=false
      thumbnail: any;
      imgURL: any;
      imageBlobUrl: any;
      
    constructor( private flower:FlowerService ,private sanitizer: DomSanitizer) { }
    flower_prediction:any = "";
    ngOnInit() {}
   

    onFileChanged(event) {
      this.img_to_prediction = event.target.files[0]
      console.log(this.img_to_prediction)
    
  
      var reader = new FileReader();
      
      reader.readAsDataURL(this.img_to_prediction); 
      reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      }
    
    }
    Reset(){
        this.show=false
        this.show2=false
        this.imgURL=null
        this.sliderValue1=0;
        this.sliderValue2=0;
        this.sliderValue3=0;

    }
    onUpload() {
        // this.http is the injected HttpClient
        const uploadData = new FormData();
       
        uploadData.append('image', this.img_to_prediction, this.img_to_prediction.name);
        this.flower.Uploding(uploadData)
          .subscribe(
            res => {
                
               this.flower_prediction =res
               this.show=true
              },
              err => {
      
      
              })
            }
    onPrediction(data:string,data1:number,data2:number,data3:number){
          
            const postData= [[this.img_to_prediction.name],[data],[data1,data2,data3]]
            
            this.flower.Predicting(postData)
            .subscribe(
              (val) => { 
                this.createImageFromBlob(val);
              });
            // .subscribe((baseImage : any) => {
              //alert(JSON.stringify(data.image));
              // let objectURL = 'data:image/jpeg;base64,' + baseImage.image;
      
              //  this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
              //  this.show2=true;

             
            // });

    }
    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageBlobUrl = reader.result;
      }, false);
    if (image) {
        reader.readAsDataURL(image);
      }
    }
      

}
