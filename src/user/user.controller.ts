import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}
  // get all user
  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('create')
  createUser(@Body() dto: CreateUserDto) {
    const user = this.userService.createUserDto(dto);
    return user;
  }

  @Get(':id/comments')
  getUserComments(@Param('id') id: string) {
    return this.commentService.findUserComment(+id);
  }
}
