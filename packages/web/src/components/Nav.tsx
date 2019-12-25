import { Box, Flex, Image, Link } from "rebass";
import { Search, ShoppingCart } from "styled-icons/fa-solid";
import { Layout } from "./Layout";
import { NavLink } from "./NavLink";

export const Nav = () => (
  <Box
    sx={{ position: "fixed", width: "100%", top: 0, left: 0, zIndex: 10 }}
    bg="white"
    pt={4}
    pb={4}
  >
    <Layout>
      <Flex justifyContent="space-between">
        <Link href="#">
          <Image
            width={50}
            src="http://pixontrips.com/wp-content/uploads/2016/02/Pix_on_Trips_logo_100px.png"
          />
        </Link>
        <Box sx={{ display: ["none", "none", "block"] }} pt={2}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/shop">Pix</NavLink>
          <NavLink href="/trips">Trips</NavLink>
          <NavLink href="/blogs">Blogs</NavLink>
          <NavLink>Buy Prints</NavLink>
          <NavLink>About</NavLink>
          <NavLink href="/my-account">My Account</NavLink>
          <NavLink href="cart">
            <ShoppingCart size={17} />
          </NavLink>
          <NavLink>
            <Search size={17} />
          </NavLink>
        </Box>
      </Flex>
    </Layout>
  </Box>
);
