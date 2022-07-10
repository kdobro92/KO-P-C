"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_email_addr: {
        type: Sequelize.STRING,
      },
      user_pwd: {
        type: Sequelize.STRING,
      },
      memb_seri_no: {
        type: Sequelize.STRING,
      },
      grop_code: {
        type: Sequelize.STRING,
      },
      cust_id: {
        type: Sequelize.STRING,
      },
      stat_code: {
        type: Sequelize.STRING,
      },
      cust_numb_divi_code: {
        type: Sequelize.STRING,
      },
      memb_regi_divi_code: {
        type: Sequelize.STRING,
      },
      cell_id_yn: {
        type: Sequelize.STRING,
      },
      cust_firs_name: {
        type: Sequelize.STRING,
      },
      cust_last_name: {
        type: Sequelize.STRING,
      },
      yiny_divi_code: {
        type: Sequelize.STRING,
      },
      birt_day: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
      nati_code: {
        type: Sequelize.STRING,
      },
      emai_addr: {
        type: Sequelize.STRING,
      },
      emai_data: {
        type: Sequelize.STRING,
      },
      home_page: {
        type: Sequelize.STRING,
      },
      cell_numb: {
        type: Sequelize.STRING,
      },
      rela_phon_numb_use_yn: {
        type: Sequelize.STRING,
      },
      rela_phon_numb: {
        type: Sequelize.STRING,
      },
      cont_poss_time_code: {
        type: Sequelize.STRING,
      },
      cont_star_time: {
        type: Sequelize.STRING,
      },
      diss_cate_code: {
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
    await queryInterface.dropTable("users");
  },
};
