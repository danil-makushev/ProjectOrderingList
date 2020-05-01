import { Part } from "../sharred/part.model";

export class Project {
  constructor(
    public title: String,
    public description: String,
    public imageURL: String,
    public parts: Part[]
  ) {}
}
