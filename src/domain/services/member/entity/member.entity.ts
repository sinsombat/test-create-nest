export class Member {
  memberId?: string;
  name: string;
  email: string;
  age?: string;
  createdAt?: Date;

  constructor(memberId: string, name: string, email: string, age: string) {
    this.memberId = memberId;
    this.name = name;
    this.email = email;
    this.age = age;
    this.createdAt = this.createdAt;
  }
}
