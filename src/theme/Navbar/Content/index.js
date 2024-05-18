import React from 'react';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';
import {useLocation} from '@docusaurus/router';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({items}) {
  const {pathname} = useLocation();

  return (
    <>
      {items
        .filter((x) => {
          const catalogMap = {
            'docs/frontend': {
              key: 'docs',
              label: '前端',
              pathname: 'docs',
            },
            blog: {
              key: 'blog',
              label: '杂记',
              pathname: 'blog',
            },
            'docs/other': {
              key: 'other',
              label: '其他',
              pathname: 'music-theory|English|workout',
            },
          };

          const parentItem = ['music-theory', 'English', 'workout'].includes(
            pathname.split('/')[1],
          )
            ? catalogMap[x.catalog]?.key !== 'other' && x.itemType === 'parent'
            : !pathname.includes(catalogMap[x.catalog]?.key) &&
              x.itemType === 'parent';
          const childItem = ['music-theory', 'English', 'workout'].includes(
            pathname.split('/')[1],
          )
            ? catalogMap[x.catalog]?.key === 'other' && x.itemType === 'child'
            : pathname.includes(catalogMap[x.catalog]?.key) &&
              x.itemType === 'child';

          return parentItem || childItem;
        })
        .map((item, i) => (
          <ErrorCauseBoundary
            key={i}
            onError={(error) =>
              new Error(
                `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
                {cause: error},
              )
            }>
            <NavbarItem {...item} />
          </ErrorCauseBoundary>
        ))}
    </>
  );
}
function NavbarContentLayout({left, right}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
