import React from 'react';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';
import {useLayoutDocsSidebar} from '@docusaurus/theme-common/internal';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import { useLocation }  from '@docusaurus/router';
export default function DocSidebarNavbarItem({
  sidebarId,
  label,
  docsPluginId,
  ...props
}) {
  const {pathname} = useLocation()
  const {activeDoc} = useActiveDocContext(docsPluginId);
  const {catalog} = props
  // console.log(pathname,catalog)
  const sidebarLink = useLayoutDocsSidebar(sidebarId, docsPluginId).link;
  // console.log(pathname,sidebarId)
  const catalogArr = ['前端', '生活', '其他']
  if (pathname.includes('docs') && catalog !== 'frontend') {
    // console.log(label)

    // return null
  }
  if (!sidebarLink) {
    throw new Error(
      `DocSidebarNavbarItem: Sidebar with ID "${sidebarId}" doesn't have anything to be linked to.`,
    );
  }
  return (
    <DefaultNavbarItem
      exact
      {...props}
      isActive={() => activeDoc?.sidebar === sidebarId}
      label={label ?? sidebarLink.label}
      to={sidebarLink.path}
      onClick={() => console.log(label)}
    />
  );
}
