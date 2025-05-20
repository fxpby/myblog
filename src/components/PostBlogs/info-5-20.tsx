import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import usePostHooks from "./usePostHooks";

const MyComponent = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { blogPost250520 = "" } = customFields;

  const { contentElement } = usePostHooks({ blogPostId: blogPost250520 });

  return <>{contentElement}</>;
};

export default MyComponent;
