import {Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ModalComponent} from "../modal/modal.component";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    ModalComponent,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
  providers: [ModalService]
})
export class ColorsComponent {
  constructor(public modalService:ModalService) {
  }
  colors: string[] = [
    "ral-1014",
    "ral-1015",
    "ral-1018",
    "ral-2004",
    "ral-3003",
    "ral-3005",
    "ral-3009",
    "ral-3011",
    "ral-5002",
    "ral-5005",
    "ral-5021",
    "ral-6002",
    "ral-6005",
    "ral-7004",
    "ral-7005",
    "ral-7016",
    "ral-7024",
    "ral-8004",
    "ral-8017",
    "ral-8019",
    "ral-9003",
    "ral-9005",
    "ral-9006",
    "rr-32"];
}
