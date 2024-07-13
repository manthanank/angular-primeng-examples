import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorModule } from 'primeng/editor';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, EditorModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  text: string = 'Hello, World!';

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      text: new FormControl(this.text),
    });
  }

  ngOnInit() {}
}
