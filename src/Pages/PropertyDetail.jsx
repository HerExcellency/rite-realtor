import React from 'react';
import { useParams } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'Luxurious Villa',
    description: 'Beautiful 4-bedroom villa with a stunning view.',
    price: '$1,200,000',
    imageUrl: 'villa-image.jpg',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    description: 'Spacious apartment in the heart of the city.',
    price: '$500,000',
    imageUrl: 'apartment-image.jpg',
  },
];

const PropertyDetail = () => {
  const { id } = useParams();

  const property = properties.find(prop => prop.id === parseInt(id));

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="property-detail">
      <img src={property.imageUrl} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
    </div>
  );
};

export default PropertyDetail;
