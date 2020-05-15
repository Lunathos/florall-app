const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { id } = request.params;

        const tree = await connection('trees').where('id', id).select('*');

        return response.json(tree);
    }
}