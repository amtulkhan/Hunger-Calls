const RestaurantCategory = ({ data }) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
      <span className="font-semibold text-md">
        {data.title}({data.itemCards.length})
      </span>
      <span>⬇️</span>
    </div>
  );
};
export default RestaurantCategory;
