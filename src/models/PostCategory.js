const PostCategoryModel  = (sequelize, DataTypes) => {

  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    },
  ); 
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogpost',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    }); 
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    }); 
  }
  return PostCategory;
}

module.exports = PostCategoryModel;