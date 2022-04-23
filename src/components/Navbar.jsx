import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import WebhookIcon from "@mui/icons-material/Webhook";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

// customized toolbar
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

// customized searchbar
const Search = styled("div")(({ theme }) => ({
  // backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

// customized icon container
const IconContainer = styled("div")(({ theme }) => ({
  display: "none",
  alignContent: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

// customized icon container for small screen
const SmallScreenIconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Imamul Huda
        </Typography>
        <WebhookIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={7} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/92946761_2668531753468236_649550104860033024_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeENNVpIsljn6IXwx3SzrvtQDPrNgjARkZwM-s2CMBGRnFnzlafZfW5iiSrMrrhRC6KU8EaZF0fAFzSOuLG3cbn8&_nc_ohc=kUfkGStNaxwAX--VHbJ&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-XO7s1EgoWtfuJbzmt3BYOc0mtFHHS9YgCNu_ED5mpYQ&oe=6288994C"
          />
        </IconContainer>
        <SmallScreenIconContainer onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/92946761_2668531753468236_649550104860033024_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeENNVpIsljn6IXwx3SzrvtQDPrNgjARkZwM-s2CMBGRnFnzlafZfW5iiSrMrrhRC6KU8EaZF0fAFzSOuLG3cbn8&_nc_ohc=kUfkGStNaxwAX--VHbJ&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-XO7s1EgoWtfuJbzmt3BYOc0mtFHHS9YgCNu_ED5mpYQ&oe=6288994C"
          />
          <Typography variant="span">Yash</Typography>
        </SmallScreenIconContainer>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem> Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
