import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import usePostHooks from "./usePostHooks";

const MyComponent = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { blogPost250519 = "" } = customFields;

  const { contentElement } = usePostHooks({ blogPostId: blogPost250519 });

  return <>{contentElement}</>;
};

export default MyComponent;
