export class User {
  readonly id;
  readonly name;
  readonly age;

  constructor(dependencies: { id: string; name: string; age: number }) {
    this.id = dependencies.id;
    this.name = dependencies.name;
    this.age = dependencies.age;
  }
}
