'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('publics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      grp_code: {
        type: Sequelize.STRING
      },
      majo_code: {
        type: Sequelize.STRING
      },
      midd_code: {
        type: Sequelize.STRING
      },
      majo_titl: {
        type: Sequelize.STRING
      },
      smal_name: {
        type: Sequelize.STRING
      },
      majo_comp_titl: {
        type: Sequelize.STRING
      },
      midd_comp_titl: {
        type: Sequelize.STRING
      },
      use_yn: {
        type: Sequelize.STRING
      },
      out_seri: {
        type: Sequelize.INTEGER
      },
      firs_crea_empl: {
        type: Sequelize.STRING
      },
      last_edit_date_time: {
        type: Sequelize.INTEGER
      },
      last_edit_empl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('publics');
  }
};