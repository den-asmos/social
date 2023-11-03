const Post = ({ title, content, publisher, image }) => {
  return (
    <div className="mx-auto max-w-[1080px] p-8 flex flex-col justify-start items-center rounded-md shadow-sm shadow-[var(--color-violet)]">
      <div className="w-full flex justify-end items-center gap-8">
        <div className="flex text-center flex-col">
          <h1 className="text-5xl text-[var(--color-violet)]">{title}</h1>
          <span className="mb-4">{publisher}</span>
        </div>
        <div className="w-fit my-4 p-4 rounded-md border-r border-b border-[var(--color-violet)] shadow-md">
          <img
            src={image}
            alt={title}
            className="w-[400px] object-contain rounded-md"
          />
        </div>
      </div>
      <hr className="my-8 w-full border" />
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default Post;
