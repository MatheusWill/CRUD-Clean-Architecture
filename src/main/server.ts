import app from './config/app'
import connection from '../infra/db/mssqldb/helpers/connect'

connection()
app.listen(8080, () => console.log(`🔥 Server running at http://localhost:8080 🔥`))
