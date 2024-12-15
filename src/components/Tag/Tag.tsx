interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <p className="bg-secondary rounded-xl px-3 py-1 w-fit text-xs" key={tag}>
      #{tag}
    </p>
  );
};

export default Tag;
