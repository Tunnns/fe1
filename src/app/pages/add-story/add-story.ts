import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { StoryService } from "./story";

@Component({
  selector: "app-add-story",
  imports: [ReactiveFormsModule],
  templateUrl: "./add-story.html",
  styleUrl: "./add-story.css",
})
export class AddStory {
  addForm: FormGroup;

  success = "";
  error = "";
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService
  ) {
    this.addForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      author: [""],
      views: [""]
    });
  }

  get title() {
    return this.addForm.get("title");
  }

  submitForm() {
    if (this.addForm.invalid) {
      return;
    }

    this.error = "";
    this.success = "";
    this.isLoading = true;

    const data = this.addForm.value;

    this.storyService.createStory(data).subscribe({
      next: () => {
        this.success = "Thêm truyện thành công";
        this.addForm.reset();
        this.isLoading = false;
      },
      error: () => {
        this.error = "Có lỗi xảy ra";
        this.isLoading = false;
      },
    });
  }
}