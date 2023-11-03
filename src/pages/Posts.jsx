import { PostPreview } from '../components';

const lorem = {
  title: 'The cocept of meow etimology',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus neque, qui labore alias dolor, eos fugiat, debitis laboriosam cum ab sint molestias repudiandae reprehenderit assumenda facilis. Unde, in sint.',
  image:
    'https://www.ukpets.com/blog/wp-content/uploads/2020/05/british-short-hair-cat.jpg',
  publisher: 'mr mur',
};

const Posts = () => {
  return (
    <>
      <h1 className="my-8 text-5xl text-[var(--color-violet)] text-center">
        Posts
      </h1>
      <div className="max-w-[1080px] mx-auto p-8 grid grid-cols-3">
        <PostPreview
          title={lorem.title}
          image={lorem.image}
          publisher={lorem.publisher}
        />
        <PostPreview
          title={lorem.title}
          image={lorem.image}
          publisher={lorem.publisher}
        />
        <PostPreview
          title={lorem.title}
          image={lorem.image}
          publisher={lorem.publisher}
        />
      </div>
    </>
  );
};

export default Posts;
