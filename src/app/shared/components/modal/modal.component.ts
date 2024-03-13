import { Component } from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(public modalService:ModalService) {
  }

}
