import React from 'react';

const CakeList = ({ cakes, onEdit, onDelete }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto font-parastoo">
      <h2 className="text-5xl text-[rgba(224,99,99,0.85)] mb-8">
        Manage Cake Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold text-[rgba(224,99,99,0.85)] mb-1">
                {cake.name}
              </h3>
              <p className="text-[rgba(79,79,79,0.7)] italic text-sm mb-1">
                Flavour: <span className="not-italic">{cake.flavour}</span>
              </p>
              <p className="text-[rgba(79,79,79,0.7)] italic text-sm mb-2">
                Ingredients: <span className="not-italic">{cake.ingredients}</span>
              </p>
              <p className="text-lg text-[rgba(224,99,99,0.85)] font-bold mb-4">
                {cake.price}
              </p>

              <div className="flex justify-between">
                <button
                  onClick={() => onEdit(cake)}
                  className="px-4 py-2 text-sm rounded-md bg-[rgba(224,99,99,0.85)] text-white hover:bg-[rgba(215,135,157,1)] transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(cake.id)}
                  className="px-4 py-2 text-sm rounded-md border border-[rgba(224,99,99,0.85)] text-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,0.1)] transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeList;
