"use client";
import React, { useEffect, useRef, useState } from "react";
import ArticleCard from "@/app/components/Sections/ArticleCard";
import Container from "../Commons/Container";

const AI = [
  {
    title: "After 'historic' investment in chips and data centers...",
    category: "LEADERSHIP",
    author: "LIONEL LIM",
    date: "January 14, 2025",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2189981438-e1736797203465.jpg?w=1440&q=75",
  },
  {
    title: "Lawmakers stop worrying about AI’s existential risk...",
    category: "NEWSLETTERS",
    author: "JEREMY KAHN",
    date: "January 14, 2025",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2189981438-e1736797203465.jpg?w=1440&q=75",
  },
  {
    title: "Elon Musk praises the 'exponential improvement'...",
    category: "TECH",
    author: "CHRISTIAAN HETZNER",
    date: "January 14, 2025",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2189981438-e1736797203465.jpg?w=1440&q=75",
  },
  {
    title: "Reimagining the artist’s signature so creative people...",
    category: "COMMENTARY",
    author: "SCOTT BELSKY",
    date: "January 14, 2025",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2189981438-e1736797203465.jpg?w=1440&q=75",
  },
];

const articles = [
  {
    title: "Bonds yields are rising like crazy: What that means for investors",
    category: "Finance", // Change category to 'Finance'
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2189981438-e1736797203465.jpg?w=1440&q=75",
    description:
      "Last week’s blowout jobs report has Wall Street wondering whether the Fed will continue its rate-cutting regime in 2025.",
    author: "Greg McKenna", // Author information
    date: "January 13, 2025", // Date information
  },

  {
    title:
      "An investor who spent $27 million on a mansion that burned down on ‘Billionaire’s Beach’ only expects $3 million from insurance",
    category: "Environment",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2193220859-e1736785438243.jpg?w=1440&q=75", // Replace with appropriate image URL
    author: "Jason Ma",
    date: "January 13, 2025",
  },

  {
    title: "Trump team studies gradual tariff hikes under emergency powers",
    category: "Finance",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2192427196-e1736811750924.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title: "Wall Street job losses may top 200,000 as AI replaces roles",
    category: "Technology",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2191572160-e1736808931265.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Bill Ackman says his bid for Howard Hughes Holdings would make it ‘a modern-day Berkshire Hathaway’",
    category: "Real Estate",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2158830162-1-e1736790402526.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Jamie Dimon says tariffs can help resolve competition, security issues",
    category: "Politics",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2193220859-e1736785438243.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Claims about a billionaire couple hurting efforts to fight the L.A. fires via their ‘control’ of the water supply are false",
    category: "Economy",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2192427196-e1736811750924.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Exclusive: Startup pioneering tiny robots that can travel inside the brain gets $28 million in new venture funding",
    category: "Technology",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2191572160-e1736808931265.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Bill Ackman says his bid for Howard Hughes Holdings would make it ‘a modern-day Berkshire Hathaway’",
    category: "Real Estate",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2158830162-1-e1736790402526.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Jamie Dimon says tariffs can help resolve competition, security issues",
    category: "Politics",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2193220859-e1736785438243.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Claims about a billionaire couple hurting efforts to fight the L.A. fires via their ‘control’ of the water supply are false",
    category: "Economy",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2192427196-e1736811750924.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },

  {
    title:
      "Exclusive: Startup pioneering tiny robots that can travel inside the brain gets $28 million in new venture funding",
    category: "Technology",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2191572160-e1736808931265.jpg?w=1440&q=75",
    author: "Bloomberg",
    date: "January 13, 2025",
  },
];

const newsletters = [
  {
    title: "Eye on AI",
    description:
      "Lawmakers stop worrying about AI’s existential risk and instead embrace its economic potential",
    author: "Jeremy Kahn",
  },
  {
    title: "MPW Daily",
    description:
      "Mark Zuckerberg says corporate America needs more 'masculine energy,' even though men run 89% of Fortune 500 companies",
    author: "Emma Hinchliffe and Nina Ajemian",
  },
  {
    title: "CHRO Daily",
    description:
      "Major Fortune 500 companies including Cisco and Mattel describe how they’re showing up for Los Angeles-based employees during the fire emergency",
    author: "Brit Morse, Lila Maclellan, and Others",
  },
  {
    title: "CFO Daily",
    description:
      "Fed may halt interest rate cuts—and could even pursue a hike, say analysts",
    author: "Sheryl Estrada",
  },
  {
    title: "Term Sheet",
    description:
      "As Los Angeles burns, the view from the top of the hill with Upfront Ventures’ Mark Suster",
    author: "Allie Garfinkle",
  },
  {
    title: "Data Sheet",
    description:
      "China evaluates sale of TikTok U.S. to Elon Musk, report says",
    author: "Andrew Nusca",
  },
];

const NewsLayout: React.FC = () => {
  const ref = useRef<any>(null);
  return (
    <Container>
      <div className="max-w-7xl mx-auto p-6 space-y-10">
        {/* Headline Chính */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#ecf5f7] p-5 group">
          {/* Left: Image */}
          <div className="">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-[400px] object-cover rounded-lg transition-all duration-300 ease-in-out hover:brightness-75"
            />
          </div>

          {/* Right: Title, Description, Author, and Date */}
          <div className="flex flex-col justify-center space-y-4 ">
            <h2 className="text-[16px] font-semibold text-[#e4121a] hover:underline">
              {articles[0].category}
            </h2>
            <a className="text-[40px] font-semibold leading-[120%] transition-colors duration-300 ease-in-out hover:text-[#007bb5] ">
              {articles[0].title}
            </a>
            <p className="text-lg hover:text-[#007bb5]">
              {articles[0].description}
            </p>
            <p className="text-sm text-[#111111]">
              By{" "}
              <strong className="hover:underline hover:text-[#007bb5]">
                {articles[0].author}
              </strong>
            </p>
            <p className="text-sm text-gray-500">{articles[0].date}</p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 space-y-10 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {articles.slice(1, 4).map((article, index) => (
                <ArticleCard
                  key={index}
                  imageUrl={article.image}
                  category={article.category}
                  title={article.title}
                  author={article.author}
                  date={article.date}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 border-t-2 pt-6 space-y-6 max-h-[500px] ">
            <h2 className="text-2xl font-semibold border-b pb-2">
              Latest News
            </h2>
            {articles.slice(1, 4).map((article, index) => (
              <div key={index} className="flex space-x-4 items-start">
                <div>
                  <h3 className="font-semibold text-lg">{article.title}</h3>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {articles.slice(4, 8).map((article, index) => (
            <ArticleCard
              key={index}
              imageUrl={article.image}
              category={article.category}
              title={article.title}
              author={article.author}
              date={article.date}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <div
            data-cy="hp-in-stream-0"
            className="flex flex-col items-center space-y-4"
          >
            <div
              id="InStream0"
              data-cy="hp-in-stream-0-child"
              data-google-query-id="CNzHwYmq9IoDFSuH6QUdFSYsTg"
            >
              <div
                id="google_ads_iframe_21809533738/fortune/desktop/incontent/home/1_0__container__"
                className="border-0"
              >
                <iframe
                  id="google_ads_iframe_21809533738/fortune/desktop/incontent/home/1_0"
                  name="google_ads_iframe_21809533738/fortune/desktop/incontent/home/1_0"
                  title="3rd party ad content"
                  width="728"
                  height="90"
                  scrolling="no"
                  marginWidth="0"
                  marginHeight="0"
                  frameBorder="0"
                  aria-label="Advertisement"
                  tabIndex="0"
                  allow="private-state-token-redemption;attribution-reporting"
                  data-load-complete="true"
                  className="border-0 align-bottom"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {articles.slice(8).map((article, index) => (
            <ArticleCard
              key={index}
              imageUrl={article.image}
              category={article.category}
              title={article.title}
              author={article.author}
              date={article.date}
            />
          ))}
        </div>

        <div className="relative py-12 px-6 flex justify-center items-center">
          <div className="absolute top-0 right-0 border-t-2 border-r-2 border-black w-16 h-16"></div>
          <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-black w-16 h-16"></div>
          <div className="text-left">
            <h2 className="text-[32px] font-bold">
              Sign up for the CEO Daily newsletter
            </h2>
            <p className="text-gray-600 text-[24px]">
              Get global perspectives and insights from CEOs on the biggest
              stories in business.
            </p>
            <button className="mt-4 px-6 py-2 bg-black text-white font-semibold uppercase hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-[#111111] text-white py-10 p-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Newsletters</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsletters.map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-gray-700 pt-4 hover:text-gray-300 transition"
                  >
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                    <p className="text-gray-500 font-bold mt-4">
                      BY {item.author.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-1 flex items-center justify-center bg-white text-black p-6">
                <div className="text-center">
                  <h3 className="font-bold text-xl">Subscribe for $1/mo.</h3>
                  <p className="text-sm mt-2">
                    Claim your first month at our intro rate. Renews at full
                    price.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold uppercase hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2 ">
            <a href="#" className="hover:text-[#007bb5]">
              AI
            </a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI.map((article, index) => (
              <ArticleCard
                key={index}
                imageUrl={article.image}
                category={article.category}
                title={article.title}
                author={article.author}
                date={article.date}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <iframe
              src="https://example.com/ad"
              className="w-full lg:w-2/3 h-full border-none"
              title="Advertisement"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsLayout;
