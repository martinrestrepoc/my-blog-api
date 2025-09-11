import { Controller, Get, Param, Post, Body, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/services/users.service';
import { PostsService } from 'src/posts/services/posts.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Get(':id/profile')
  findUserProfile(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserProfile(id);
  }

  @Get(':id/posts')
  findPostsbyUser(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.getPostsByUser(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() changes: UpdateUserDto) {
    return this.usersService.update(id, changes);
  }
}
