import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, Min } from 'class-validator';

export class CreateMemberSchema {
    @ApiProperty({ example: 'John Doe', description: 'The name of the member' })
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email address of the member' })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 30, description: 'The age of the member' })
    @IsInt()
    @Min(18)
    readonly age: number;

    constructor(name: string, email: string, age: number) {
        name = this.name;
        email = this.email;
        age = this.age;
    }
}