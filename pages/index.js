import Link from "next/link";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <h1>Home Page</h1>;
      <ul>
        <li>
          <Link href="/news/NextJS">NextJs Link</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
