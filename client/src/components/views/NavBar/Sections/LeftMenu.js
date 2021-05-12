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
        <Menu.Item key="mail"><a href="https://www.cdc.gov/coronavirus/2019-ncov/community/parks-rec/amusement-park-carnival.html">Park Guidelines</a></Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Covid Travel Insurance">
        <Menu.Item key="mail"><a href="https://www.frommers.com/tips/health-and-travel-insurance/buying-travel-insurance-during-covid-19-should-you-and-what-kind">Is it Worth It?</a></Menu.Item>
        <Menu.Item key="mail"><a href="https://www.forbes.com/advisor/travel-insurance/best-pandemic-travel-insurance/">Find Travel Insurance</a></Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu