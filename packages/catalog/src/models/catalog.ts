import { BeforeCreate, Entity, PrimaryKey, Property } from "@mikro-orm/core"

import { generateEntityId } from "@medusajs/utils"

@Entity({ tableName: "catalog" })
export class Catalog {
  // composite primary key id - name
  // the id should be composed of {entityName}_{id}

  // Create a catalog relation table that link the catalog row to the related parent rows

  @PrimaryKey({ columnType: "text" })
  id!: string

  /*@Property({ columnType: "json", nullable: true })
  @Index({ name: "IDX_catalog_children_ids" })
  children_ids: string[] | null*/

  @Property({ columnType: "text", nullable: false })
  name: string

  @Property({ columnType: "jsonb", default: "{}" })
  data: Record<string, unknown>

  @BeforeCreate()
  beforeCreate() {
    this.id = generateEntityId(this.id, "catalog")
  }
}

export default Catalog