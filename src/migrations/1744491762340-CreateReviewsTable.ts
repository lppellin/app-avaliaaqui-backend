import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateReviewsTable1744491762340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reviews",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "productId", type: "int", isNullable: false },
          { name: "name", type: "varchar", isNullable: false },
          { name: "email", type: "varchar", isNullable: false },
          { name: "feedback", type: "text", isNullable: false },
          { name: "experience", type: "varchar", isNullable: false },
          { name: "recommend", type: "boolean", isNullable: false },
          { name: "createdAt", type: "timestamp", default: "CURRENT_TIMESTAMP" },
          { name: "updatedAt", type: "timestamp", default: "CURRENT_TIMESTAMP" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "reviews",
      new TableForeignKey({
        columnNames: ["productId"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("reviews");
  }
}
