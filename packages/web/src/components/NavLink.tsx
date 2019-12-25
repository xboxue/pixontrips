import { Link } from "rebass";

export const NavLink = props => (
  <Link
    {...props}
    sx={{
      display: "inline-block",
      color: "inherit",
      mx: 3,
      textDecoration: "none"
    }}
  />
);
