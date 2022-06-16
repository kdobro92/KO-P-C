"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("boards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grp_code: {
        type: Sequelize.STRING,
      },
      cust_id: {
        type: Sequelize.STRING,
      },
      put_seri_no: {
        type: Sequelize.INTEGER,
      },
      put_prog_stat_code: {
        type: Sequelize.STRING,
      },
      secr_numb: {
        type: Sequelize.STRING,
      },
      cust_name: {
        type: Sequelize.STRING,
      },
      put_titl_cont: {
        type: Sequelize.STRING,
      },
      put_deta_cont: {
        type: Sequelize.STRING,
      },
      file_text_kind_code: {
        type: Sequelize.STRING,
      },
      file_name: {
        type: Sequelize.STRING,
      },
      file_stor_loca_cont: {
        type: Sequelize.STRING,
      },
      list_count: {
        type: Sequelize.INTEGER,
      },
      firs_crea_date_time: {
        type: Sequelize.INTEGER,
      },
      firs_crea_empl: {
        type: Sequelize.STRING,
      },
      last_edit_date_time: {
        type: Sequelize.INTEGER,
      },
      last_edit_empl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("boards");
  },
};
