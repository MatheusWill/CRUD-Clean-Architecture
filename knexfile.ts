const knexConfig = {

  development: {
    client: 'mssql',
    connection: {
      database: "Estagio",
      host: "192.168.100.8",
      port: 49273,
      user: "matheus.willian",
      password: "@mw1q2w3e4r@"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/infra/db/mssqldb/database/migrations`
    },
  },

}

export default knexConfig