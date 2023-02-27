import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthSchema} from "./auth.model/auth.model";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  controllers: [AuthController],
  imports: [
      MongooseModule.forFeature(
          [{ name: 'Auth', schema: AuthSchema }])
  ]
})
export class AuthModule {}
