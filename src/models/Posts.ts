import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Users from "./Users";

@ObjectType()
@Entity()
class Posts {
   @Field(() => ID)
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @Field()
   @Column("varchar")
   caption!: string;

   @Field(() => Number)
   @Column("integer")
   likes!: number;

   @Field(() => Users)
   @ManyToOne(() => Users, (user) => user.posts)
   user!: Users;

   @Field()
   @Column("varchar")
   uniqueId!: string;
}

export default Posts;
