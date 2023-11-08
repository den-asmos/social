const PostPreview = ({ title, image, publisher, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mx-auto w-[300px] p-4 flex flex-col justify-start items-center rounded-md shadow-sm shadow-[var(--color-violet)] hover:cursor-pointer hover:scale-[1.05] duration-300 ease-in-out"
    >
      <img
        src={image}
        alt={title}
        className="w-[100px] object-contain rounded-md"
      />
      <div className="w-full flex justify-end items-center gap-2">
        <div className="flex text-center flex-col">
          <h1 className="text-2xl text-[var(--color-violet)]">{title}</h1>
          <span>By {publisher}</span>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
