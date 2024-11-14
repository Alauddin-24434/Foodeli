import React from 'react';

const FoodItemCard = () => {
  const foodItems = [
    {
      _id: '1',
      name: 'Delicious Pizza',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 12.99,
    },
    {
      _id: '2',
      name: 'Tasty Burger',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 8.99,
    },
    {
      _id: '3',
      name: 'Chocolate Cake',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 6.99,
    },
    {
      _id: '4',
      name: 'Pasta Alfredo',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 10.99,
    },
    {
      _id: '5',
      name: 'Fresh Salad',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 5.99,
    },
    {
      _id: '6',
      name: 'Chicken Wings',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 9.99,
    },
    {
      _id: '7',
      name: 'Fish Tacos',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 7.99,
    },
    {
      _id: '8',
      name: 'Sushi Platter',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 15.99,
    },
    {
      _id: '9',
      name: 'Ice Cream Sundae',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 4.99,
    },
    {
      _id: '10',
      name: 'French Fries',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 3.99,
    },
    {
      _id: '11',
      name: 'Veggie Wrap',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 6.49,
    },
    {
      _id: '12',
      name: 'Grilled Sandwich',
      thumbnailImage: 'https://via.placeholder.com/300x200',
      price: 5.49,
    },
  ];

  const handleNavigate = (id) => {
    console.log(`Navigating to item with ID: ${id}`);
    // Add navigation logic here (e.g., React Router)
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {foodItems.map((item) => (
        <div
          key={item._id}
          className="relative overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg"
        >
          {/* Image */}
          <img
            onClick={() => handleNavigate(item._id)}
            className="h-36 w-full rounded-t-lg object-cover cursor-pointer"
            src={item.thumbnailImage}
            alt={item.name}
          />
          {/* Content */}
          <div className="mt-4 px-5 pb-5">
            <h5
              onClick={() => handleNavigate(item._id)}
              className="cursor-pointer text-xl font-semibold tracking-tight text-slate-900"
            >
              {item.name}
            </h5>
            <div className="mt-2.5 mb-5 flex items-center">
              <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  ${item.price}
                </span>
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItemCard;
