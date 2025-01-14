"use client";
import { useEffect, useState } from "react";
import { TbLayoutSidebar } from "react-icons/tb";

import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";

import Search from "@/app/components/Commons/Search";
import Driver from "@/app/components/Commons/Driver";
import Collections from "@/app/components/Commons/Collections";
import BlogRecentPost from "@/app/components/Sections/BlogRecentPost";
import BlogTags from "@/app/components/Sections/BlogTags";
import Button from "@/app/components/Commons/Button";

interface BlogItem {
  id: number;
  attributes: {
    Title: string;
    Collection: {
      data?: {
        id: number;
      };
    };
    Tags: {
      data?: {
        id: number;
      }[];
    };
  };
}

interface BlogCollection {
  id: number;
  attributes: {
    Title: string;
  };
}

interface BlogTag {
  id: number;
  attributes: {
    Title: string; // Adjust based on your actual tag structure
  };
}

const BlogSideBar = ({
  handleBlogs,
}: {
  handleBlogs: (data: BlogItem[]) => void;
}) => {
  const [clearSignal, setClearSignal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");
  const [blogList, setBlogList] = useState<BlogItem[]>([]);
  const [blogPreview, setBlogPreview] = useState<BlogItem[]>([]);
  const [tagSelected, setTagSelected] = useState<number | null | undefined>(
    undefined
  );

  const [blogCollection, setBlogCollection] = useState<BlogCollection[]>([]);
  const [blogTag, setBlogTag] = useState<BlogTag[]>([]);
  const [collectionSelected, setCollectionSelected] = useState<
    number | undefined
  >(undefined);
  const { getBlogsItems, getBlogsTags, getBlogsCollections } =
    useCollectionTypesStores();

  const getCountBlogByCollection = (data: BlogItem[]) => {
    const countByCollectionId: Record<number, number> = {};
    data.forEach((item) => {
      const collectionId = item.attributes.Collection.data?.id;
      if (collectionId) {
        countByCollectionId[collectionId] =
          (countByCollectionId[collectionId] || 0) + 1;
      }
    });

    return blogCollection.map((item) => {
      const count = countByCollectionId[item.id] || 0; // Use the collection ID directly
      return {
        ...item,
        count: count,
      };
    });
  };

  const handleGetBlogListByCollection = (collectionId: number) => {
    setCollectionSelected(collectionId);
    setOpenSidebar(false);
  };

  const handleGetBlogListByTag = (tagId: number) => {
    setTagSelected(tagId);
    setOpenSidebar(false);
  };

  const handleSearch = (key: string) => {
    setSearchKey(key);
    setOpenSidebar(false);
  };

  useEffect(() => {
    const onSuccessItems = (res: BlogItem[]) => {
      if (res) {
        setBlogList(res);
        setBlogPreview(res);
      }
    };

    const onSuccessTags = (res: BlogTag[]) => {
      if (res) setBlogTag(res);
    };

    const onSuccessCollections = (res: BlogCollection[]) => {
      if (res) setBlogCollection(res);
    };

    getBlogsItems("?populate=*&locale=en", onSuccessItems);
    getBlogsTags("?populate=*&locale=en", onSuccessTags);
    getBlogsCollections("?populate=*&locale=en", onSuccessCollections);
  }, [getBlogsItems, getBlogsTags, getBlogsCollections]);

  useEffect(() => {
    const blogListBySearchKey = blogList.filter((item) =>
      item.attributes.Title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setBlogPreview(blogListBySearchKey);
  }, [searchKey]);

  useEffect(() => {
    const blogListByCollection = collectionSelected
      ? blogList.filter(
          (item) => item.attributes.Collection.data?.id === collectionSelected
        )
      : blogList;
    setBlogPreview(blogListByCollection);
  }, [collectionSelected]);

  useEffect(() => {
    const blogListByTag = tagSelected
      ? blogList.filter((item) =>
          item.attributes.Tags.data?.some((tag) => tag.id === tagSelected)
        )
      : blogList;
    setBlogPreview(blogListByTag);
  }, [tagSelected]);

  const clearFilters = () => {
    setSearchKey("");
    setTagSelected(undefined);
    setCollectionSelected(undefined);
    setBlogPreview(blogList);
    setClearSignal((prev) => !prev);
  };
  const handleTagSelect = (tagId: number) => {
    if (tagSelected === tagId) {
      setTagSelected(null);
    } else {
      setTagSelected(tagId);
    }
  };

  useEffect(() => {
    handleBlogs(blogPreview);
  }, [blogPreview]);

  const hasFilters = !!(searchKey || tagSelected || collectionSelected);

  const getLabelColor = (collectionId: number) => {
    if (collectionSelected === undefined) return "text-gray-500";
    return collectionSelected === collectionId
      ? "text-[#333333]"
      : "text-gray-500";
  };

  return (
    <div className="relative md:mr-7">
      <div>
        <div className="flex flex-wrap items-center">
          <div className="flex-1 md:flex-[0 0 100%]">
            <Search searchKey={handleSearch} />
          </div>
          <div className="w-[3.5rem] h-full ml-2 lg:hidden">
            <Button
              icon={TbLayoutSidebar}
              onClick={() => setOpenSidebar(!openSidebar)}
              outline
              className="py-1"
            />
          </div>
        </div>
        <div className="mb-[25px] md:mb-[31px]"></div>
      </div>

      <div className="hidden md:block">
        <div className="flex w-full flex-wrap justify-between be-vietnam-pro-regular text-[#333333] text-[20px] leading-[24px] tracking-[0.5px]">
          <p>Filter</p>
          <p
            onClick={clearFilters}
            className={`text-right ${
              hasFilters ? "text-blue-600" : "text-gray-500 cursor-not-allowed"
            }`}
          >
            Clear
          </p>
        </div>
        <Driver style="dashed" />
        <h3 className="text-[20px] md:text-[23px] be-vietnam-pro-regular text-[#333333] mb-4 leading-[24px] tracking-[0.5px]">
          Blog Categories
        </h3>
        {blogCollection.map((collection) => (
          <div key={collection.id}>
            <input
              type="radio"
              id={`collection-${collection.id}`}
              name="collection"
              checked={collectionSelected === collection.id}
              onChange={() => handleGetBlogListByCollection(collection.id)}
            />
            <label
              htmlFor={`collection-${collection.id}`}
              className={`ml-2 text-[16px] be-vietnam-pro-regular leading-[140%] tracking-[0.5px] ${getLabelColor(
                collection.id
              )}`}
            >
              {collection.attributes.Title} (
              {getCountBlogByCollection(blogList).find(
                (item) => item.id === collection.id
              )?.count || 0}
              )
            </label>
          </div>
        ))}
        <div className="py-6"></div>
        <h3 className="text-[20px] md:text-[23px] be-vietnam-pro-regular mb-4 text-[#333333] leading-[24px] tracking-[0.5px]">
          Tag
        </h3>
        <ul>
          {blogTag.map((item: BlogTag) => (
            <li
              key={item.id}
              onClick={() => handleTagSelect(item.id)}
              className={`inline-block text-[14px] be-vietnam-pro-regular leading-[140%] 
                ${
                  tagSelected === item.id
                    ? "text-[#F97316] border-[#F97316]"
                    : "text-gray-500 border-gray-500"
                }
                mr-2 mb-2 border-[1px] rounded px-3 capitalize cursor-pointer`}
            >
              {item.attributes.Title}
            </li>
          ))}
        </ul>

        <div className="py-6"></div>
        <BlogRecentPost data={blogList} />
      </div>

      <div
        className={`block md:hidden ${
          openSidebar
            ? "opacity-1 visible top-[100%]"
            : "opacity-0 invisible top-[calc(100%+10px)]"
        } ml-20 absolute right-0 left-0 transition-all duration-500 bg-white p-10 z-[1]`}
        style={{ boxShadow: "var(--box-shadow)" }}
      >
        <div className="flex w-full flex-wrap justify-between  be-vietnam-pro-regular text-[#333333] text-[16px] leading-[24px] tracking-[0.5px]">
          <p>Filter</p>
          <p
            onClick={clearFilters}
            className={`text-right ${
              hasFilters ? "text-blue-600" : "text-gray-500 cursor-not-allowed"
            }`}
          >
            Clear
          </p>
        </div>
        <Driver style="dashed" />
        <h3 className="text-[20px] md:text-[23px] be-vietnam-pro-regular mb-4 text-[#333333] leading-[24px] tracking-[0.5px]">
          Blog Categories
        </h3>
        {blogCollection.map((collection) => (
          <div key={collection.id}>
            <input
              type="radio"
              id={`collection-mobile-${collection.id}`}
              name="collection-mobile"
              checked={collectionSelected === collection.id}
              onChange={() => handleGetBlogListByCollection(collection.id)}
            />
            <label
              htmlFor={`collection-mobile-${collection.id}`}
              className={`ml-2 text-[16px] be-vietnam-pro-regular leading-[140%] tracking-[0.5px] ${getLabelColor(
                collection.id
              )}`}
            >
              {collection.attributes.Title} (
              {getCountBlogByCollection(blogList).find(
                (item) => item.id === collection.id
              )?.count || 0}
              )
            </label>
          </div>
        ))}
        <Driver style="dashed" />
        <h3 className="text-[20px] md:text-[23px] be-vietnam-pro-regular mb-4 text-[#333333] leading-[24px] tracking-[0.5px]">
          Tag
        </h3>
        <ul>
          {blogTag.map((item: BlogTag) => (
            <li
              key={item.id}
              onClick={() => handleTagSelect(item.id)}
              className={`inline-block text-[14px] be-vietnam-pro-regular leading-[140%] 
                ${
                  tagSelected === item.id
                    ? "text-[#F97316] border-[#F97316]"
                    : "text-gray-500 border-gray-500"
                }
                mr-2 mb-2 border-[1px] rounded px-3 capitalize cursor-pointer`}
            >
              {item.attributes.Title}
            </li>
          ))}
        </ul>

        <Driver style="dashed" />
        <BlogRecentPost data={blogList} />
      </div>
    </div>
  );
};

export default BlogSideBar;
