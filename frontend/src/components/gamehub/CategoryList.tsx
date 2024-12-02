import useCategory from "./hooks/useCategory";

interface Props {
  isDark: boolean;
}

function CategoryList({ isDark }: Props) {
  const { data } = useCategory();

  return (
    <div className="flex-col">
      <h2
        className={`text-xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium xl:text-2xl`}
      >
        Genres
      </h2>

      <ul className="px-2">
        {data &&
          data.map((category) => (
            <li
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } xl:text-xl`}
              key={category.id}
            >
              {category.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CategoryList;
