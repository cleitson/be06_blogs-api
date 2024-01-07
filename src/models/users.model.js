const UsersModel = (sequelize, DataTypes) => {

  const model = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    display_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps: false
  })

  model.associate = (models) => {
    model.belongsTo(models.BlogPost, {
      foreignKey: 'id'
    })
  }
  return model;
};

module.exports = UsersModel;