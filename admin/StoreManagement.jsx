import React, { useState } from 'react';
import CakeList from './CakeList';
import AddCakeForm from './AddCakeForm';
import AdminCarousel from './AdminCarousel';
import { cakeData } from '../../data/cake_data';

const StoreManagement = () => {
  const [cakes, setCakes] = useState(cakeData);
  const [editCake, setEditCake] = useState(null);

  const addCake = (newCake) => {
    setCakes([...cakes, newCake]);
  };

  const updateCake = (updatedCake) => {
    setCakes(cakes.map((cake) => (cake.id === updatedCake.id ? updatedCake : cake)));
    setEditCake(null);
  };

  const deleteCake = (id) => {
    setCakes(cakes.filter((cake) => cake.id !== id));
  };

  const handleEdit = (cake) => {
    setEditCake(cake);
  };

  return (
<div className="py-6 shadow-md text-center">
   <div className="bg-[rgba(255,225,235,0.8)] py-4 shadow-sm">
  <h1 className="text-5xl font-bold text-[rgba(224,99,99,0.85)] font-[Parastoo]">
    Store Management
  </h1>
</div>

  <AdminCarousel />
  <AddCakeForm onAdd={addCake} onUpdate={updateCake} editCake={editCake} />
  <CakeList cakes={cakes} onEdit={handleEdit} onDelete={deleteCake} />
</div>

  );
};

export default StoreManagement;
