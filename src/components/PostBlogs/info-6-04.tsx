import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import usePostHooks from "./usePostHooks";

const MyComponent = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { blogPost250604 = "" } = customFields;

  const { contentElement } = usePostHooks({ blogPostId: blogPost250604 });

  return <>{contentElement}</>;
};

export default MyComponent;
