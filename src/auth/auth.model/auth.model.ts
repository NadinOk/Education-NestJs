import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


@Schema()
export class Auth {

    @Prop({unique: true})
    email: string;

    @Prop()
    passwordHash: string;

}
export const AuthSchema = SchemaFactory.createForClass(Auth);