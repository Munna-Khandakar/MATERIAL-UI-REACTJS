import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/64218387_1312768325537120_268731121548656640_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFjhffhQLk1kn2dNn4qL9V0YCXPQ1ndvdJgJc9DWd290plEVCiXOlb1D1QRBsXbDFj3SYK7qiTwrfRe1XUP8ejW&_nc_ohc=v7EzqxDHNPEAX9WzKO6&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_lerjoRGcsBz6spOSj6RD2HrH5tp6lu7LLq8kyzNH-rA&oe=62891CE4"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Musaddik Habib"
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/268804907_1719838491693139_9170930619010885310_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGYiWXKc22MGG_1zYN7ZsD39Dbxl99Vn0D0NvGX31WfQCKaqoemkjLGYtBS9xp6tBJYXK6kVNL8o_LLSQrkNucn&_nc_ohc=G4cits-pAqcAX8ERXsg&tn=guIwyHaiIDB0f2lB&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-YArJzyouLZONjCZCeo7sbIsXRX3lGNvdIYoGIDC59Rw&oe=6268FFBD"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          শত সিনিয়র আপুদের আদরের জুনিয়র মুসা (Musaddik Habib) তোমাকে জানাই
          জন্মদিনের শুভেচ্ছা। এই যুগে তোমার মতো ছেলে খুব কমই আছে। যেমন দীনি
          মানুষ, ঠিক তেমন তোমার আচরণ। আমি দেখেছি তুমি কাউকে আঘাত দিয়ে কথা বোলো
          না। তুমি খুবই বিনয়ী। তুমি ফ্যাকাল্টিদের প্রশ্নকর্তা। তুমি সহজ সুন্দর।
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
