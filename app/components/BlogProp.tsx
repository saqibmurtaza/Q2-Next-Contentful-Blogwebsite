import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const fetchContentfulData = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}&content_type=blogpost`,
    { cache: 'no-cache' }
  );
  if (!response.ok) {
    throw new Error(`data Fetched failed`);
  }
  return await response.json();
};

const BlogProp = async () => {
  const fetchedData = await fetchContentfulData();
  console.log(fetchedData);
  console.log(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}&content_type=blogpost`
  );
  return (
    <main className='container grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3'>
      <div className='sm:col-span-2 md:col-span-3'>
      <div className='item p-5 text-lg'>
        <p>Explore a diverse range of insightful articles in my Blog section, 
          where I share perspectives on career development, health and fitness, writing, 
          technology, and more. <br/>Each post is crafted to inspire and inform, offering valuable insights into various 
          aspects of life and learning. <br/>Join me on this journey of exploration and discovery through engaging and thought-provoking 
          content.
        </p>
      </div>
     </div>
      {fetchedData.items.map((item:any) => (
        <div key={item.sys.id}>
          {fetchedData.includes.Asset.map((iterate:any) => {
            if (item.fields.featuredImage.sys.id === iterate.sys.id) {
              return (
                <div key={iterate.sys.id} className="item">
                  <Image
                    src={`https:${iterate.fields.file.url}`}
                    alt='Picture'
                    width={1000}
                    height={1000}
                    className='rounded-xl w-40 h-40'
                  />
                  <div>
                    <h2>{item.fields.title}</h2>
                    <p>{item.fields.description}</p> 
                    <Link href={`/blog/${item.fields.slug}`}>Read more</Link>
                  </div>
                </div>
              );
            }
            return null; // Return null if the condition is not met
          })}
        </div>
        ))
      }
      
    </main>
  );
};

export default BlogProp;
    
