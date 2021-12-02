import { Knex } from "knex"


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('matheus.users', (table) => {
    table.increments('id').unique()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('accessToken')

    // table.timestamp('created_at').defaultTo(knex.fn.now())
    // table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('matheus.users')
}

