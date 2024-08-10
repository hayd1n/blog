import NavbarBrand from './navbar-brand.svelte';
import NavbarItem from './navbar-item.svelte';
import NavbarItems from './navbar-items.svelte';
import NavbarMenuToggle from './navbar-menu-toggle.svelte';
import NavbarSpace from './navbar-space.svelte';
import Navbar from './navbar.svelte';

const Root = Navbar;
const Brand = NavbarBrand;
const Items = NavbarItems;
const Item = NavbarItem;
const Space = NavbarSpace;
const MenuToggle = NavbarMenuToggle;

export { Root, Brand, Items, Item, Space, MenuToggle };
