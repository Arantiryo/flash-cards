type SetCardProps = {
  name: string;
  description: string;
  author: string;
};

const SetCard = ({ name, description, author }: SetCardProps) => {
  return (
    <section className="flex cursor-pointer flex-col justify-center rounded border-2 border-gray-500 p-6 pb-4 shadow-xl duration-300 motion-safe:hover:scale-105">
      <h2 className="text-left text-lg text-gray-700">{name}</h2>
      <p className="mb-4 text-left text-sm text-gray-600">{description}</p>
      <p className="text-left text-sm text-gray-600">{author}</p>
    </section>
  );
};

export default SetCard;
