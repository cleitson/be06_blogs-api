'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
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
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('post_categories');
  }
};
