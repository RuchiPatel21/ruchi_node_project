async function name(params){
    const pg=require("pg")
    const {Client} = pg

    const client = new Client({
        user: 'sql_db',
        password: 'Mishi',
        host: 'localhost',
        port: 5432,
        database: 'rupesh_db',
    })

    await client.connect()
    const result = await client.query('SELECT * FROM students;',[])

    console.log(result)
}

name()