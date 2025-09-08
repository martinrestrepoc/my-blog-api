import { Type } from 'class-transformer';
import { IsString, IsEmail, IsNotEmpty, MinLength, ValidateNested, IsOptional } from 'class-validator';
import { CreateProfileDto, UpdateProfileDto } from './profile.dto';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Type(() => CreateProfileDto)
  @IsNotEmpty()
  @ValidateNested()
  profile: CreateProfileDto;
}

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['profile'])) {
  // Hace que se pueda omitir el campo profile
  @Type(() => UpdateProfileDto)
  @IsOptional()
  @ValidateNested()
  profile: UpdateProfileDto;
  /*
  Se debe usar con UpdateProfileDto para que se pueda actualizar
  sin necesidad de llenar todos los campos
  */
}
