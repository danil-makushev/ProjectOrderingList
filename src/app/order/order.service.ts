import { Injectable, EventEmitter } from "@angular/core";
import { Part } from "../sharred/part.model";
@Injectable({
  providedIn: "root",
})
export class OrderService {
  partsChanged = new EventEmitter<Part[]>();
  private parts: Part[] = [
    new Part("test Part Name 1", 2),
    new Part("test Part Name 2", 2),
  ];

  public getParts() {
    return this.parts.slice();
  }
  constructor() {}

  public addPart(part: Part) {
    this.parts.push(part);
    this.partsChanged.emit(this.parts.slice());
  }

  public addParts(parts: Part[]) {
    this.parts.push(...parts);
    this.partsChanged.emit(this.parts.slice());
  }
}
