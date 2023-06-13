import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CommentService } from 'src/comment/comment.service';

@Module({
  controllers: [UserController],
  providers: [UserService, CommentService],
})
export class UserModule {}
