const UsersModel = (sequelize, DataTypes) => {

  const model = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'users',
    timestamps: false,
    undescored: true,
  })

  model.associate = (models) => {
    model.hasMany(models.BlogPost, {
      foreignKey: 'id'
    })
  }
  return model;
};

module.exports = UsersModel;