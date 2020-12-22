import React from 'react';
import Link from 'next/link';
import RenderItem from './RenderItem';

export default function ListCourses({ data }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-grey-600">New Classes</h2>
          <h3 className="text-xl text-grey-900">
            Summer <span className="text-teal-400">Productive</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-grey-600 hover:underline text-sm">
              View All Courser
            </a>
          </Link>
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
