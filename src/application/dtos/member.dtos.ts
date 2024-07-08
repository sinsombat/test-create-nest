import { ApiProperty } from "@nestjs/swagger";

export class GetMemberResponseDto{
    @ApiProperty({ example: '1234', description: 'Member Id' })
    readonly id: string;

    @ApiProperty({ example: 'John Doe', description: 'The name of the member' })
    readonly name: string;

    @ApiProperty({ example: 'john.doe@mail.com', description: 'The email address of the member' })
    readonly email: string;
}

export class CreateMemberResponseDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the member' })
    readonly name: string;

    @ApiProperty({ example: 'john.doe@mail.com', description: 'The email address of the member' })
    readonly email: string;

    @ApiProperty({ example: 30, description: 'The age of the member' })
    readonly age: number;
}

