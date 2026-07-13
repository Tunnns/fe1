import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  get title(){
    return this.addForm.get('title')
  }
    get author(){
    return this.addForm.get('title')
  }
    get views(){
    return this.addForm.get('title')
  }

  constructor(private fb: FormBuilder){
    this.addForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      author: "",
      views: ["", [Validators.min(0)]]
    })
  }

  submitForm() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
    } else {
      this.addForm.markAllAsTouched();
    }
  }
}
