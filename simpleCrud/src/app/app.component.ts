import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'simple Crud';
  subName: any = {};
  newSubName: any = {};
  unHide: boolean = false;
  myValue: any;
  msg: any;
  
  names = [
    {animal: "dog", type: "land"},
    {animal: "fish", type: "water"},
    {animal: "bird", type: "air"}
  ];

  
  addAnimal(){
    this.names.push(this.subName);
    this.subName = {}
    this.msg = "successfully created"
  }
  deleteAnimal(i){
    this.names.splice(i,1);
    this.msg = "successfully deleted"
  }
  editAnimal(i){
    this.newSubName.animal = this.names[i].animal;
    this.newSubName.type = this.names[i].type;
    this.unHide = true
    this.myValue = i;
    
  }
  updateAnimal(){
    let k = this.myValue;
    for(let i=0; i<this.names.length;i++){
      if(i==k){
        this.names[i] = this.newSubName;
        this.newSubName = {};
        this.msg = "successfully updated"
        this.unHide = false;
      }
    
    }
  
  }
  clickME(){
    this.msg = "";
    }
}
  
   
    
    

