import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Part } from "src/app/sharred/part.model";

@Component({
  selector: "app-order-list-edit",
  templateUrl: "./order-list-edit.component.html",
  styleUrls: ["./order-list-edit.component.scss"],
})
export class OrderListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  @Output() newPartAdded = new EventEmitter<Part>();

  onAddNewPart() {
    this.newPartAdded.emit(
      new Part(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
