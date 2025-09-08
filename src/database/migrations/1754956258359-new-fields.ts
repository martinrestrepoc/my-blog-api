import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewFields1754956258359 implements MigrationInterface {
  name = 'NewFields1754956258359';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "categories" ADD "description" character varying(800)`);
    await queryRunner.query(`ALTER TABLE "categories" ADD "coverImage" character varying(800)`);
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "cover_image"`);
    await queryRunner.query(`ALTER TABLE "posts" ADD "cover_image" character varying(800)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "cover_image"`);
    await queryRunner.query(`ALTER TABLE "posts" ADD "cover_image" character varying(255)`);
    await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "coverImage"`);
    await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "description"`);
  }
}
