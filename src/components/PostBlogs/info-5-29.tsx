import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import usePostHooks from "./usePostHooks";

const MyComponent = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { blogPost250529 = "" } = customFields;

  const { contentElement } = usePostHooks({ blogPostId: blogPost250529 });

  return <>{contentElement}</>;
};

export default MyComponent;
