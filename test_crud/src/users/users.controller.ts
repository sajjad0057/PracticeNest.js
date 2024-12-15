import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get('interns') // Get /users/interns
  findAllInterns() {
    return [];
  }

  @Post() // POST /users
  create(@Body() user: UserDto) {
    return this.usersService.create(user);
  }

  @Patch(':id') //PATCH /users/:id
  update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: UserDto) {
    return this.usersService.update(id,userUpdate);
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
