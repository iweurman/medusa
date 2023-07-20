"use client"

import { useSidebar } from "@/providers/sidebar"
import clsx from "clsx"
import dynamic from "next/dynamic"
import { SidebarItemProps } from "./Item"
import Loading from "../Loading"

const SidebarItem = dynamic<SidebarItemProps>(async () => import("./Item"), {
  loading: () => <Loading count={1} />,
}) as React.FC<SidebarItemProps>

type SidebarProps = {
  className?: string
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  const { items, sidebarOpen } = useSidebar()

  return (
    <aside
      className={clsx(
        "clip bg-docs-bg dark:bg-docs-bg-dark w-api-ref-sidebar block",
        "border-medusa-border-base dark:border-medusa-border-base-dark border-0 border-r border-solid",
        "fixed -left-full top-[57px] z-50 h-screen transition-[left] lg:relative lg:top-0 lg:left-auto lg:top-auto lg:h-auto lg:transition-none",
        sidebarOpen && "!left-0",
        className
      )}
      style={{
        animationFillMode: "forwards",
      }}
    >
      {items.top.length === 0 &&
        items.bottom.length === 0 &&
        items.mobile.length === 0 && <Loading className="px-1" />}
      <ul
        className={clsx(
          "sticky top-[57px] h-screen max-h-screen w-full list-none overflow-auto p-0"
        )}
        id="sidebar"
      >
        {items.mobile.map((item, index) => (
          <SidebarItem
            item={item}
            key={index}
            className={clsx(
              "lg:hidden",
              index === items.mobile.length - 1 &&
                "border-medusa-border-base dark:border-medusa-border-base-dark border-0 border-b border-solid"
            )}
          />
        ))}
        {items.top.map((item, index) => (
          <SidebarItem
            item={item}
            key={index}
            className={clsx(
              index === items.top.length - 1 &&
                "border-medusa-border-base dark:border-medusa-border-base-dark border-0 border-b border-solid"
            )}
          />
        ))}
        {items.bottom.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar