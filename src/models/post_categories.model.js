const PostCategoriesModel  = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories',
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        field: 'post_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
        field: 'category_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      }
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
    },
  ); 
  return PostCategories;
}

module.exports = PostCategoriesModel;