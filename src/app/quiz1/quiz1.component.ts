import { Component, OnInit } from '@angular/core';
import{QuizServiceService} from '../quiz-service.service'

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.scss']
})
export class Quiz1Component implements OnInit {
   i=0;
   answer="";
   mark=0;
   txt:string;
   correct:boolean;
  constructor(public q1:QuizServiceService) { }
  ngOnInit(): void {
  }
  onChange(){
    if(this.q1.quiz1[this.i].orgAnswer==this.q1.quiz1[this.i].answer){
       this.correct=true;
       this.txt="Correct";
    }else if(this.q1.quiz1[this.i].orgAnswer!=this.q1.quiz1[this.i].answer){
      this.correct=true;
      this.txt="Wrong";
    }
  }
 
  onClick(){
    console.log(this.q1.quiz1.length);
    if(this.i<this.q1.quiz1.length-1){
    this.i++;
    } 
  }
  onClick2(){
    if(this.i>0){
    this.i--;
     }
    this.correct=false;
  }
onSubmit(){
  for(let j=0;j<this.q1.quiz1.length;j++){
    if(this.q1.quiz1[j].orgAnswer==this.q1.quiz1[j].answer){
      this.mark++;
    }
  }
}


}
