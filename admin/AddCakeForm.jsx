import React, { useState, useEffect } from 'react';

const AddCakeForm = ({ editCake = null, onAdd, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    category: '',
    flavour: '',
    price: '',
    discount: '',
    quantityKg: '',
    stockCount: '',
    available: true,
  });

  useEffect(() => {
    if (editCake) {
      const {
        name, description, image, category, flavour, price,
        discount, quantityKg, stockCount, available
      } = editCake;

      setFormData({
        name,
        description,
        image,
        category,
        flavour,
        price: price.replace(/[^\d]/g, ''),
        discount,
        quantityKg,
        stockCount,
        available,
      });
    }
  }, [editCake]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      price: formData.price.startsWith('₹') ? formData.price : `₹${formData.price}`,
    };

    if (editCake) {
      finalData.id = editCake.id;
      onUpdate(finalData);
    } else {
      finalData.id = Date.now(); // Assign unique id
      onAdd(finalData);
    }

    setFormData({
      name: '',
      description: '',
      image: '',
      category: '',
      flavour: '',
      price: '',
      discount: '',
      quantityKg: '',
      stockCount: '',
      available: true,
    });
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto mt-10 border border-[rgba(224,99,99,0.5)] font-[Parastoo]">
      <h2 className="text-3xl font-bold text-center mb-6 text-[rgba(224,99,99,0.85)]">
        {editCake ? 'Edit Cake' : 'Add New Cake'}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Cake Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Description</label>
          <textarea
            name="description"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Price (₹)</label>
          <input
            type="text"
            name="price"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Quantity (Kg)</label>
          <select
            name="quantityKg"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.quantityKg}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="0.5">0.5 kg</option>
            <option value="1">1 kg</option>
            <option value="2">2 kg</option>
            <option value="3">3 kg</option>
          </select>
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Stock Count</label>
          <input
            type="number"
            name="stockCount"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.stockCount}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Category</label>
          <input
            type="text"
            name="category"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Flavour</label>
          <input
            type="text"
            name="flavour"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.flavour}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold">Discount (%)</label>
          <input
            type="number"
            name="discount"
            className="w-full border border-pink-300 rounded px-3 py-2"
            value={formData.discount}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="mr-2 h-5 w-5"
          />
          <span className="text-[rgba(224,99,99,0.85)] font-semibold">
            {formData.available ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="md:col-span-2 text-center mt-6">
          <button
            type="submit"
            className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-6 py-2 rounded-full shadow-md"
          >
            {editCake ? 'Update Cake' : 'Add Cake'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCakeForm;
