'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

import Social from '../../Social/Social'

const MobileMenu = () => {
  let currentPage = ''
  const pathname = usePathname()

  currentPage = pathname.split('-')[0].split('/')[1]

  if (currentPage !== 'works' && currentPage !== 'blog' && currentPage !== 'home') {
    currentPage = 'others'
  }

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <Sidebar>
          <Menu className="sidebar-menu_wrapper">
            <SubMenu label="Home Sweet Home">
              <MenuItem component={<Link href="/service" />}>SDB - Smart Digital Blind</MenuItem>
              <MenuItem component={<Link href="/service/5" />}>SDW - Smart Digital Window</MenuItem>
            </SubMenu>
            <SubMenu label="Day at the Office">
              <MenuItem component={<Link href="/service" />}>SDF - Smart Digital Film</MenuItem>
              <MenuItem component={<Link href="/service/5" />}>SDG - Smart Digital Glass</MenuItem>
            </SubMenu>
            <SubMenu label="'Warehouse' lighting?">
              <MenuItem component={<Link href="/service" />}>SDB - Smart Digital Blind</MenuItem>
              <MenuItem component={<Link href="/service/5" />}>SDW - Smart Digital Window</MenuItem>
              <MenuItem component={<Link href="/service/5" />}>SDF - Smart Digital Film</MenuItem>
              <MenuItem component={<Link href="/service/5" />}>SDG - Smart Digital Glass</MenuItem>
              <MenuItem component={<Link href="/service/5" />}>SHF - Smart Holo Film</MenuItem>
              <MenuItem component={<Link href="/service/5" />}>SLF - Smart LED Film</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>N2L</span>. All Rights Reserved. <br />
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  )
}

export default MobileMenu
