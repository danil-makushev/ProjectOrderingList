import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Part } from "../shared/part.model";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  partsChanged = new Subject<Part[]>();
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
    this.partsChanged.next(this.parts.slice());
  }

  public addParts(parts: Part[]) {
    this.parts.push(...parts);
    this.partsChanged.next(this.parts.slice());
  }
}
