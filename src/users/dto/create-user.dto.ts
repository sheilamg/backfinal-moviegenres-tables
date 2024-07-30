import { IsEmail, IsNumber, IsOptional, IsString, IsUUID } from "class-validator"
import { Review } from "src/reviews/entities/review.entity";
import { Role } from "src/roles/entities/role.entity";

export class CreateUserDto {
    @IsString()
    username: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsNumber()
    role: Role;

    @IsOptional()
    @IsUUID()
    review?: Review
}
