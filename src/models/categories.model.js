const CategoriesModel = (sequelize, DataTypes) => {

  //definir o model
  const Categories = sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    timestamps: false,
    underscored: true
  })

  return Categories;
}

module.exports = CategoriesModel