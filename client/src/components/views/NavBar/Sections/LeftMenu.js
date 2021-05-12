import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Blogs</span>}>
      <MenuItemGroup title="Covid Travel Guidelines">
          <Menu.Item key="mail"><a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/faqs.html">Travel During Covid</a></Menu.Item>
        <Menu.Item key="setting:2">Park Guidelines</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Travel Insurance">
        <Menu.Item key="setting:3">Is It Worth It?</Menu.Item>
        <Menu.Item key="setting:4">Find Travel Insurance</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu