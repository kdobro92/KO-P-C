"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      board_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "boards",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      user_nickname: {
        type: Sequelize.STRING,
      },
      put_deta_cont: {
        type: Sequelize.STRING,
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
      seri_no: {
        type: Sequelize.INTEGER,
      },
      stat_code: {
        type: Sequelize.STRING,
      },
      put_titl_cont: {
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
    await queryInterface.dropTable("comments");
  },
};
