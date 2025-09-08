import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity'; // Import Profile entity if needed
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile]), PostsModule], // Import TypeOrmModule with User entity
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService to make it available in other modules
})
export class UsersModule {}
