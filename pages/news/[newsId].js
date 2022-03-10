import { useRouter } from "next/router";

const DatailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>Detail Page: {newsId}</h1>;
};

export default DatailPage;
