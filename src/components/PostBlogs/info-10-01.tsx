import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import usePostHooks from "./usePostHooks";

const MyComponent = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { blogPost251001 = "" } = customFields;

  const { contentElement } = usePostHooks({ blogPostId: blogPost251001 });

  return <>{contentElement}</>;
};

export default MyComponent;
