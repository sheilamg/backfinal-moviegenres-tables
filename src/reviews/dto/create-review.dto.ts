import { IsNumber, IsString, Length, Min, MinLength } from "class-validator"

export class CreateReviewDto {
    //movie

    //user

    @IsString()
    //@Length(600)
    comment: string

    @IsNumber()
    rates: number
}
