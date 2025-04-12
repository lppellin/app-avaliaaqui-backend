import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1744487655637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "name", type: "varchar", isNullable: false },
          { name: "price", type: "varchar", isNullable: false },
          { name: "brand", type: "varchar", isNullable: false },
          { name: "description", type: "text", isNullable: true },
          { name: "image", type: "varchar", isNullable: true },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
