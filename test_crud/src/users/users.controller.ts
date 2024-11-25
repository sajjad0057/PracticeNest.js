import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
  GET /users
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */

  @Get()    //GET /users or /users?role=value&age=45  /// it's quary parameterized 
  findQuery(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
    return {role}
  }

  @Get() /// GET /users
  findAll() {
    return { id: ['all users '] };
  }

  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
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
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
