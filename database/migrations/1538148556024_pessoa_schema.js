'use strict'
//TODO implementar restrições dos dados
const Schema = use('Schema')

class PessoaSchema extends Schema {
  up () {
    this.create('pessoas', (table) => {
      table.increments('user_id')
      table.string('nome')
      table.integer('idade')
      table.enu('sexo', ['masculino', 'feminino'])
      table.string('localizacao')
      table.integer('mutacao')
      table.timestamps()
    })

    this.table('pessoas', (table)=>{
      table.renameColumn('user_id', 'id')
    })
  }

  down () {
    this.drop('pessoas')
  }
}

module.exports = PessoaSchema