import { User } from "../domain/user";
import { UuidGenerator } from "../domain/uuid-generator";

export class UserCreator {
  run(name: string, age: number): User {
    const user = new User({
      age,
      name,
      id: UuidGenerator.generateUuid(),
    });

    return user;
  }
}
