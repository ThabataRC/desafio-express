const validateEmail = (request, response, next) => {
    const { body } = request;
    if (body.email == undefined) {
      return response.status(400)
          .json({ message: 'O campo "email" é obrigatório' });
    }
    if (body.email === '') {
      return response.status(400)
          .json({ message: 'O campo "email" não pode ser vazio' });
    }
    next();
  };
  module.exports = { validateEmail };

  const validateAge = (request, response, next) => {
    const { body } = request;
    if (body.idade == undefined) {
      return response.status(400)
          .json({ message: 'O campo "idade" é obrigatório' });
    }
    if (body.idade === '') {
      return response.status(400)
          .json({ message: 'O campo "idade" não pode ser vazio' });
    }
    next();
  };
  module.exports = { validateAge };

  const validateName = (request, response, next) => {
    const { body } = request;
    if (body.nome == undefined) {
      return response.status(400)
          .json({ message: 'O campo "nome" é obrigatório' });
    }
    if (body.nome === '') {
      return response.status(400)
          .json({ message: 'O campo "nome" não pode ser vazio' });
    }
    next();
  };
  module.exports = { validateName };
  