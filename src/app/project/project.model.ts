import { Part } from "../shared/part.model";

export class Project {
  constructor(
    public id: number,
    public title: String,
    public description: String,
    public imageURL: String,
    public parts: Part[]
  ) {}
}
