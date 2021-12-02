import knex from 'knex'
import knexConfig from '../../../../../knexfile'

console.log("🔥 Successfully created connection with database 🔥")
export default knex(knexConfig['development'])
