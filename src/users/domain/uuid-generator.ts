import { v4 as uuidv4 } from "uuid";

export class UuidGenerator {
  static generateUuid() {
    return uuidv4();
  }
}
