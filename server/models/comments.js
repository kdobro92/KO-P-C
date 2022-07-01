"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.comments.belongsTo(models.users);
      // models.comments.belongsTo(models.boards);
    }
  }
  comments.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      board_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "boards",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      put_deta_cont: DataTypes.STRING,
      grp_code: DataTypes.STRING,
      cust_id: DataTypes.STRING,
      put_seri_no: DataTypes.INTEGER,
      seri_no: DataTypes.INTEGER,
      stat_code: DataTypes.STRING,
      put_titl_cont: DataTypes.STRING,
      file_text_kind_code: DataTypes.STRING,
      file_name: DataTypes.STRING,
      file_stor_loca_cont: DataTypes.STRING,
      firs_crea_date_time: DataTypes.INTEGER,
      firs_crea_empl: DataTypes.STRING,
      last_edit_date_time: DataTypes.INTEGER,
      last_edit_empl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comments",
    }
  );
  return comments;
};
