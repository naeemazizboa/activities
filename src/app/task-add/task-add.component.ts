import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { TaskStorageService } from "../task-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-add",
  templateUrl: "./task-add.component.html",
  styleUrls: ["./task-add.component.scss"],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TaskAddComponent {
  taskForm = new FormGroup({
    title: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
    note: new FormControl("", Validators.required)
  });

  selectedType: string | null = null;

  constructor(private storage: TaskStorageService, private router: Router) {}

  updateTitle(type: string): void {
    this.selectedType = type;
    this.taskForm.patchValue({ type });

    const titles: Record<string, string> = {
      Note: "added a note to",
      Phone: "had a call",
      Coffee: "had a coffee",
      Beer: "had a beer",
      Meeting: "had a meeting",
    };

    this.taskForm.patchValue({
      title: titles[type] ?? "",
    });
  }

  createTask(): void {
    if (this.taskForm.valid) {
      const { note, type, title } = this.taskForm.value;
      const timestamp = new Date().toISOString();
      if (note && type && title) {
        this.storage.add(note, type, title, timestamp);
        this.taskForm.reset({
          type: null,
          note: '',
          title: '',
        });
        this.selectedType = null;
        this.router.navigate(["/"]);
      }
    }
  }
}
