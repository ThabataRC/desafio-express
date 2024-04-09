const connection = require('../configs/dbConfiguration');

const findAll = async () => {
  const clientes = await (await connection)
      .execute('SELECT * FROM clientes');
  console.log(clientes[0]);
  return clientes[0];
};

const update = async (clientes) => {
  const query = 'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? Where id =?';
  const isOk = await (await connection).execute(query,
      [clientes.nome, clientes.sobrenome, clientes.email, clientes.idade,
        clientes.id]);
  return isOk[0].affectedRows === 1;
};


const save = async (clientes) => {
  const query = 'INSERT INTO clientes(nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';
  const isOk = await (await connection).execute(query,
      [clientes.nome, clientes.sobrenome, clientes.email,
        clientes.idade]);
  return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
  const query = 'DELETE FROM clientes Where id = ?';
  const isOk = await (await connection).execute(query, [id]);
  return isOk[0].affectedRows === 1;
};

module.exports = {
  findAll,
  save,
  remove,
  update,
};
