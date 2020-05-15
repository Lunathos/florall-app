const crypto = require('crypto'); //Texto aleatório para Criptografia
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const trees = await connection('trees').select('*');
    
        return response.json(trees);
    },

    async create(request, response) {
        const { popularName, sciName, description } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('trees').insert({
            id,
            popularName,
            sciName,
            description,
        })
    
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        const tree = await connection('trees')
            .where('id', id)
            .first();

        await connection('trees').where('id', id).delete();

        return response.status(204).send();
    }
};