'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nick:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      password:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      imagen:{
        type: Sequelize.STRING(255),
      },
      countries_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
          tablename: 'countries'
        },
        key: 'id'
      }
    },
    roles_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
        tablename: 'roles'
      },
      key: 'id'
    },
  },
   });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('users');
  }
};
