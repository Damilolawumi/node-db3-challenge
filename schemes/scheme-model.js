const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    update,
    remove,
}

function find() {
  return db('schemes')
}
  
function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id){
    return db("schemes as sc")
    .join("steps as s", "s.scheme_id", "sc.id")
    .select("s.id", "s.step_number", "s.instructions", "sc.scheme_name")
    .where("s.scheme_id", id);
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('schemes')
    .where('id', id)
    .del();
}