
import { CreateMemberResponseDto, GetMemberResponseDto } from "src/application/dtos/member.dtos";
import { CreateMemberSchema } from "./schema/member.schema";


export interface IMemberServices {
    findById(id: string): Promise<GetMemberResponseDto>;
    createMember(data: CreateMemberSchema): Promise<CreateMemberResponseDto>;
}
  