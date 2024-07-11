import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateMemberSchema {
  @ApiProperty({ example: 'John Doe', description: 'The name of the member' })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the member',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '28', description: 'The age of member' })
  @IsString()
  readonly age: string;
}
