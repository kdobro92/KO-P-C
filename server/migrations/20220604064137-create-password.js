'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('passwords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      secr_numb_seri_no: {
        type: Sequelize.INTEGER
      },
      grp_code: {
        type: Sequelize.STRING
      },
      cust_id: {
        type: Sequelize.STRING
      },
      secr_numb: {
        type: Sequelize.STRING
      },
      use_yn: {
        type: Sequelize.STRING
      },
      chan_date_time: {
        type: Sequelize.INTEGER
      },
      chan_chan: {
        type: Sequelize.STRING
      },
      secu_veri_chan: {
        type: Sequelize.STRING
      },
      firs_crea_date_time: {
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
    await queryInterface.dropTable('passwords');
  }
};