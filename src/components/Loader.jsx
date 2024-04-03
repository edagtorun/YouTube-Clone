import { PiUserCircleFill } from "react-icons/pi";

const Loader = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];

  return arr.map(() => (
    <div className="p-4 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700" />

      <div className="flex items-center mt-4 gap-3">
        <PiUserCircleFill className="text-4xl text-gray-700" />
        <div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-44 mb-2" />
          <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-3" />
          <div className="flex gap-2">
            <div className="w-32 h-2 bg-gray-700 rounded-full " />
            <div className="w-20 h-2 bg-gray-700 rounded-full " />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
