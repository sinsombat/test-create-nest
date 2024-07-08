import { ApiProperty } from "@nestjs/swagger";

export class GetMemberResponseDto{
    @ApiProperty({ example: 'John Doe', description: 'The name of the member' })
    readonly id: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email address of the member' })
    readonly name: string;

    @ApiProperty({ example: 'trisattawat.mekchay@kingpower.com', description: 'The email address of the member' })
    readonly email: string;
}

export class CreateMemberResponseDto {
    @ApiProperty({ example: 'Trisattawat Mekchay', description: 'The name of the member' })
    readonly name: string;

    @ApiProperty({ example: 'trisattawat.mekchay@kingpower.com', description: 'The email address of the member' })
    readonly email: string;

    @ApiProperty({ example: 30, description: 'The age of the member' })
    readonly age: number;
}

