import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserRole } from 'src/enums/user-role.enum';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  /*
  GET /users
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */

  constructor(private readonly usersService: UsersService) {}


  @Get() //GET /users or /users?role=value&age=45  /// it's quary parameterized
  findQuery(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {

    return this.usersService.findAll(role);
  }



  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('interns') // Get /users/interns
  findAllInterns() {
    return [];
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: UserDto) {
    return this.usersService.update(+id,userUpdate);
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
