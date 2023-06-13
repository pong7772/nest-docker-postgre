import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  getAllUsers(): string {
    return 'This action returns all users';
  }

  createUserDto(dto: CreateUserDto): CreateUserDto {
    return {
      name: dto.name,
      email: dto.email,
      password: dto.password,
      phoneNumber: dto.phoneNumber,
    };
  }
}
