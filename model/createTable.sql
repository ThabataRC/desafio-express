CREATE TABLE 'desafio-express`.`clientes` (`id` INT(10)  AUTO_INCREMENT , `nome`
VARCHAR(255) NOT NULL , `sobrenome` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `idade` INT(10)
NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


CREATE TABLE `desafio-express`.`produtos` (`id` INT(10)  AUTO_INCREMENT,`nome` VARCHAR(255) NOT NULL,`descricao` TEXT DEFAULT NULL,  
  `preco` DECIMAL(10,0) NOT NULL,  `data_atualizado` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

