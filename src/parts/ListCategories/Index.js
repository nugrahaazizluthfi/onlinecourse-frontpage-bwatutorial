import React from 'react';
import RenderItem from './RenderItem';
import BusinessDevelopment from 'public/images/icon-business-development.svg';
import ContentWriter from 'public/images/icon-content-writer.svg';
import ProductAdvertisement from 'public/images/icon-product-advertisement.svg';
import CustomerRelationShip from 'public/images/icon-customer-relationship.svg';
import GameDevelopment from 'public/images/icon-game-development.svg';
import TravelGuidance from 'public/images/icon-travel-guidance.svg';

export default function Index() {
  const data = [
    {
      imageName: <BusinessDevelopment />,
      name: 'Business Development',
      total: 12493,
    },
    {
      imageName: <ContentWriter />,
      name: 'Content Writer',
      total: 839,
    },
    {
      imageName: <ProductAdvertisement />,
      name: 'Product Advertisement',
      total: 478,
    },
    {
      imageName: <CustomerRelationShip />,
      name: 'Customer Relationship',
      total: 553,
    },
    {
      imageName: <GameDevelopment />,
      name: 'Game Development',
      total: 7829,
    },
    {
      imageName: <TravelGuidance />,
      name: 'Travel Guidance',
      total: 73,
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-grey-600">Category</h2>
          <h3 className="text-xl text-grey-900">
            Explore & <span className="text-teal-400">Learn</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => (
            <RenderItem item={item} key={index}></RenderItem>
          ))
        ) : (
          <div className="w-full text-center-py-12"></div>
        )}
      </div>
    </>
  );
}
