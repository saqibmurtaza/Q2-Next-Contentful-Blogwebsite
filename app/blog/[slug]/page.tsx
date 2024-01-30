import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const fetchedBlogData = async ({ slug }: { slug: string }) => {
  const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}&content_type=blogpost&fields.slug=${slug}`,
  {next : {
    revalidate : 5
  }}
  );
  if (!response.ok) {
    throw new Error(`Data fetch failed`);
  }
  return await response.json();
};


const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchedBlogData(params);

  return (
    <main className="container ">
      {data.items.map((item: any) => (
        <div key={item.sys.id} className="bg-white rounded-lg mb-8">
          {/* Title */}
          <h2 className="font-bold text-2xl p-6">{item.fields.title}</h2>
          
          {/* Content */}
          <div className="p-6">
            {documentToReactComponents(item.fields.content)}
          </div>
        </div>
      ))}
    </main>
  );
};

export default SingleBlog;

