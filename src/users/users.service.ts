import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
    //Sirve si debo hacer algo más con los usuarios
  }

  async getUserById(id: number) {
    const user = await this.findOne(id);
    if (user.id === 1) {
      throw new ForbiddenException('You are not allowed to access this resource');
    }
    return user;
  }

  async getUserProfile(id: number) {
    const user = await this.findOne(id);
    return user.profile;
  }

  async create(body: CreateUserDto) {
    try {
      const newUser = await this.usersRepository.save(body);
      return newUser;
    } catch {
      throw new BadRequestException('Error creating user');
    }
  }

  async delete(id: number) {
    try {
      await this.usersRepository.delete(id);
      return { message: 'User deleted' };
    } catch {
      throw new BadRequestException('Error deleting user');
    }
  }

  async update(id: number, changes: UpdateUserDto) {
    try {
      const user = await this.findOne(id);
      const updatedUser = this.usersRepository.merge(user, changes);
      const savedUser = await this.usersRepository.save(updatedUser);
      return savedUser;
    } catch {
      throw new BadRequestException('Error updating user');
    }
  }

  /*Debe ser una funcion asincrona porque hace una consulta a
  la base de datos y contiene una promesa*/
  private async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['profile'], // Asegura que se cargue la relación con el perfil
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }
}
