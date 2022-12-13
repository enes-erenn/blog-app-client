import React from "react";
import Posts from "../components/Posts";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const cat =
    typeof category === "string"
      ? category
          .split("-")
          .map((s) => s.replace(s[0], s[0].toUpperCase()))
          .join(" ")
      : category &&
        category[0]
          .split("-")
          .map((s) => s.replace(s[0], s[0].toUpperCase()))
          .join(" ");

  return (
    <div>
      <Posts category={cat} />
    </div>
  );
};

export default Category;
