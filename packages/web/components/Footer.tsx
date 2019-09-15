import { Box, Text } from "rebass";
import {
  FacebookF,
  FiveHundredPx,
  Instagram,
  Pinterest,
  Twitter,
  Youtube
} from "styled-icons/fa-brands";
import { NavLink } from "./NavLink";

export const Footer = () => (
  <Box bg="black" color="white" pt={5} pb={4}>
    <Box mx="auto" width="300px">
      <NavLink href="https://www.facebook.com/pixontrips">
        <FacebookF size="17" />
      </NavLink>
      <NavLink href="https://twitter.com/pixontrips">
        <Twitter size="17" />
      </NavLink>
      <NavLink href="https://www.youtube.com/channel/UCVXS1WLIC70Af8jaxGFudHw">
        <Youtube size="17" />
      </NavLink>
      <NavLink href="https://pinterest.com/pixontrips">
        <Pinterest size="17" />
      </NavLink>
      <NavLink href="https://instagram.com/pixontrips">
        <Instagram size="17" />
      </NavLink>
      <NavLink href="https://500px.com/pixontrips">
        <FiveHundredPx size="17" />
      </NavLink>
      <Text textAlign="center" color="grey" fontSize={1} pt={3}>
        Media © 2016 | Pix on Trips | All rights reserved
      </Text>
    </Box>
  </Box>
);
