import { Mask } from "src/mask/maskEntity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('review')
export class Review extends Mask{
    //movie

    @Column('text')
    title: string

    @Column('text')
    comment: string

    @Column('int')
    rates: number

    //comments

    @OneToMany(() => User, (user) => user.review)
    user: User
    //user
}
