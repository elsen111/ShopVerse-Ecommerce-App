import { Outlet } from "react-router-dom"
import Header from "../components/_shared/Header"
import { Children } from "react"

export default function Layout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
