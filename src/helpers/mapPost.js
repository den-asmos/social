export const mapPost = (post) => ({
  id: post.id,
  title: post.title,
  content: post.content,
  image: post.image,
  publisher: {
    id: post.publisher.id,
    name: post.publisher.first_name,
  },
});
