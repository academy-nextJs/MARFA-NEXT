import React from 'react';
import api from '@/utils/service/api';
import CategoryCarousel from '@/components/HomeContainer/landingCategory/categoryCarousel';




export default async function LandingPage() {
  const { data } = await api.get('/categories');
  return (
    <div>
      <h1>Landing Page</h1>
      <CategoryCarousel data={data} />
     
    </div>
  );
}
