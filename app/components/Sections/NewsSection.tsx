"use client";
import React from "react";

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

const NewsLayout: React.FC = () => {
  return (
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
        {/* 3 Column Grid */}
        <div className="lg:col-span-3 space-y-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Displaying articles dynamically */}
            {articles.slice(1, 4).map((article, index) => (
              <div key={index} className=" p-4 space-y-4 group">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[200px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-75"
                />
                <a className="text-[16px] font-semibold text-[#e4121a]">
                  {article.category}
                </a>
                <h3 className="text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-[#007bb5]">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">
                  By <strong>{article.author}</strong>
                </p>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 border-t-2 pt-6 space-y-6 max-h-[500px] ">
          <h2 className="text-2xl font-semibold border-b pb-2">Latest News</h2>
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
          <div key={index} className="p-4 space-y-4 group">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[200px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-75"
            />
            <a className="text-[16px] font-semibold text-[#e4121a]">
              {article.category}
            </a>
            <h3 className="text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-[#007bb5]">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500">
              By <strong>{article.author}</strong>
            </p>
            <p className="text-sm text-gray-500">{article.date}</p>
          </div>
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
          <div key={index} className="p-4 space-y-4 group">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[200px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-75"
            />
            <a className="text-[16px] font-semibold text-[#e4121a]">
              {article.category}
            </a>
            <h3 className="text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-[#007bb5]">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500">
              By <strong>{article.author}</strong>
            </p>
            <p className="text-sm text-gray-500">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsLayout;
