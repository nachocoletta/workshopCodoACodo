const { conn } = require('../config/conn')

const findAll = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM users')
        return rows
    }catch(error){

        throw error
    }finally{
        conn.releaseConnection()
    }
}

const findOne = async (params) => {
// console.log(params)
    try {
        const { id } = params
        const [row] = await conn.query('SELECT * FROM users WHERE ?', { id })
        return row
    }catch(error){
        throw error
    }finally{
        conn.releaseConnection()
    }
}

const store = async (params) => {
   
    try {
        console.log(params)
        const { email, password } = params
        const [row] = await conn.query('INSERT INTO users SET ?', { email, password })
        return row
    }catch(error){
        if(error.code === "ER_DUP_ENTRY"){
            return "Registro duplicado"
        }
        throw error
    }finally{
        conn.releaseConnection()
    }
}
module.exports = {
    findAll,
    findOne, 
    store
}