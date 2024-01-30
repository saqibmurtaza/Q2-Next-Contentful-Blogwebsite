import React from "react";
import BlogProp from "./components/BlogProp";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='container'>
      <div className='item mb-5 md:h-screen grid place-items-center '>
        <div className="w-4/5 h-4/5 overflow-hidden lg:w-1/3 ">
          <Image
          src={'/images/blog.jpg'}
          alt="picture"
          width={1000}
          height={1000}
          layout="intrinsic"
          className="rounded-xl"
          />
        </div>
        <div className='text-lg'>
          <h2>Welcome to Muse & Meander</h2>
          <p>
            Step into the world of Muse & Meander, your online haven for navigating 
            the ups and downs of life. Here, we&apos;re on a journey to explore different aspects of 
            life, from work and health to creativity and tech.
          </p>
          <p>
            Muse & Meander is more than just a blog; it&apos;s a place where we share stories and 
            ideas to inspire you. Our articles are like a friendly guide, helping you think about 
            life in new and interesting ways. 
          </p>
          <p>
            So, come along with us on this adventure of discovery. 
            Every post is a chance to learn something new and see the world in a fresh light. 
            Muse & Meander is all about enjoying the ride, and we can&apos;t wait to have you join us!
          </p>
        </div>
        
       </div>
       <div className="topics">
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/roadmap-to-success-for-full-stack-developers-in-light-of-industry-giants-b28bcbd01e67'}>Career & Job Seeking</Link></div>
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/the-complete-guide-to-achieving-optimal-health-and-fitness-use-our-free-calorie-calculator-dac08ba89e7a'}>Health and Fitness</Link></div>
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/zero-to-100-subscribers-for-new-tiktok-channel-e8ebc4b307de'}>Social Media and Online Presence</Link></div>
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/bluehost-the-best-web-host-company-6c114c88c8db'}>Technology and Web Hosting</Link></div>
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/how-to-choose-the-right-type-of-furniture-for-your-home-f37cae8d4982'}>Home and Interior Design</Link></div>
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/writing-can-be-a-lucrative-way-to-make-money-7ffec6d153a'}>Business and Online Income</Link></div>
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/how-do-i-create-an-email-marketing-list-359b5b45ce9'}>Digital Marketing and Email</Link></div>
          <div className="topic">
            <Link href={'https://medium.com/@saqibmurtazakhan/how-to-easily-make-six-figures-on-amazon-d6a974641eb7'}>Freelancing and Working from Home</Link></div>
        </div>
    </main>
  );
}
