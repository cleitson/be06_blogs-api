const { BlogPost, PostCategory, Category, User } = require('../models');
// const { newToken } = require('../utils/token');

const getAllposts = async () => {
  const userdata = ['id', 'displayName', 'email', 'image'];
  const posts = await PostCategory.findAll();
  const results = await Promise.all(posts.map(async (element) => {
    const postUser = await BlogPost.findByPk(element.postId);
    const category = await Category.findByPk(element.categoryId);
    const usuario = await User.findByPk(postUser.id, { attributes: userdata });
      
    const esperado = { id: postUser.id,
      title: postUser.title,
      content: postUser.content,
      userId: postUser.userId,
      published: postUser.published,
      updated: postUser.updated,
      user: usuario,
      categories: [category],
    };
    return esperado;
  }));
  return { status: 'SUCCESS', data: results };
};

module.exports = { getAllposts };