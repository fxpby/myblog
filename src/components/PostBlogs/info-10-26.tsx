import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import usePostHooks from "./usePostHooks";

const MyComponent = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { blogPost251026 = "" } = customFields;

  const { contentElement } = usePostHooks({ blogPostId: blogPost251026 });

  return <>{contentElement}</>;
};

export default MyComponent;
