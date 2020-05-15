
exports.up = function(knex) {
    return knex.schema.createTable('trees', function (table) {
        table.string('id').primary;
        table.string('popularName', 255).notNullable();
        table.string('sciName', 255).notNullable();
        table.string('description', 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('trees');
};
