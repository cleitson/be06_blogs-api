const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id',
      foreignKey: true,
      onDelete: 'SET NULL',
      onUpdate: 'SET NULL'
    }
  }, {
    tableName: 'blog_posts',
    timeStamps: false
  })

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.Users, {
      foreignKey: 'id',
      as: 'user'
    });

    BlogPost.belongsToMany(models.Categories, {
      through: models.PostCategories,
      otherKey: 'categoryId',
      foreignKey: 'postId',
      as: 'categories'
    })
  };

  return BlogPost;
};

module.exports = BlogPostModel;