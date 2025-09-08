import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  coverImage?: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  categoryIds?: number[];
}
