import { Field, ID, ObjectType } from "type-graphql";
import {
   BaseEntity,
   Column,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
} from "typeorm";
import Posts from "./Posts";

@ObjectType()
@Entity("users")
class Users extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @Field()
   @Column("varchar", { nullable: false, unique: true })
   username!: string;

   @Field()
   @Column("varchar", { nullable: false, unique: true })
   email!: string;

   @Column()
   password!: string;

   @Field(() => [Posts])
   @OneToMany(() => Posts, (posts) => posts.user)
   posts!: Posts[];

   @Field({ nullable: true })
   token!: string;

   static async getUserByEmail(email: string): Promise<Users | undefined> {
      return await Users.findOne({ where: { email }, relations: ["posts"] });
   }

   static async findById(id: string) {
      return await Users.findOne({ where: { id }, relations: ["posts"] });
   }
}

export default Users;
