import { callApi } from "@/app/apis";
import { getImageURL } from "@/app/libs/function";
import { constants as c } from "@/app/libs/constant";

import { BreadcrumbsItem } from "@/app/types";
import Container from "@/app/components/Commons/Container";
import RecruitmentDetail from "@/app/components/Sections/RecruitmentDetail";
import Breadcrumbs from "@/app/components/Header/Breadcrumbs";

import LogoImage from "@/public/images/logo.png";

export async function generateStaticParams() {
  const blogs: any = await callApi(
    "/api/recruitments?populate=*&locale=en",
    "get"
  );

  return blogs?.data?.data?.map((post: any) => ({
    slug: post?.attributes?.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const fetchMeta = await callApi(
    `/api/recruitments?filters[slug][$eq]=${params.slug}&populate=*&locale=en`,
    "get"
  );

  const post = fetchMeta?.data?.data[0];

  return {
    title: post?.attributes?.Title || c.META_TITLE,
    description: post?.attributes?.Introduction || c.META_DESCRIPTION,
    openGraph: {
      images: [
        getImageURL(post?.attributes?.Image?.data?.attributes?.url) ||
          LogoImage,
      ],
    },
  };
}

export default async function BlogsPageDetail({
  params,
}: {
  params: { slug: string };
}) {
  const fetchMeta = await callApi(
    `/api/recruitments?filters[slug][$eq]=${params.slug}&populate=*&locale=en`,
    "get"
  );

  const post = fetchMeta?.data?.data[0];

  if (!post) {
    return {
      notFound: true,
    };
  }

  const items: BreadcrumbsItem[] = [
    c.RECRUITMENT_PAGE,
    {
      title: post?.attributes?.Title,
      link: `/recruitments/${params.slug}`,
    },
  ];

  return (
    <>
      <Breadcrumbs title={post?.attributes?.Title} items={items} />
      <Container>
        <RecruitmentDetail post={post} />
      </Container>
    </>
  );
}
