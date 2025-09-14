import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { User } from '../../users/entities/user.entity';
import { Category } from './category.entity';

@Entity({ name: 'posts' })
export class Post {
  @ApiProperty({ description: 'The unique identifier of the post' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The title of the post' })
  @Column({ type: 'varchar', length: 255 })
  title: string;

  @ApiProperty({ description: 'The content of the post', required: false })
  @Column({ type: 'text', nullable: true })
  content: string;

  @ApiProperty({ description: 'The cover image URL of the post', required: false })
  @Column({ type: 'varchar', length: 900, name: 'cover_image', nullable: true })
  coverImage: string;

  @ApiProperty({ description: 'The summary of the post', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  summary: string;

  @ApiProperty({ description: 'Indicates whether the post is a draft', default: false })
  @Column({ type: 'boolean', default: false, name: 'is_draft' })
  isDraft: boolean;

  @ApiProperty({ description: 'The date and time when the post was created' })
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @ApiProperty({ description: 'The date and time when the post was last updated' })
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Category, (category) => category.posts)
  @JoinTable({
    name: 'posts_categories',
    joinColumn: { name: 'post_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  categories: Category[];
  // Se crea una tabla intermedia 'post_categories' para manejar la relación muchos a muchos entre Post y Category.
}
