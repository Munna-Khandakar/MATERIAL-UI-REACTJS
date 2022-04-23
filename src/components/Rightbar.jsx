import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" marginRight={5}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={9}>
          <Avatar
            alt="Imamul Huda"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/92946761_2668531753468236_649550104860033024_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeENNVpIsljn6IXwx3SzrvtQDPrNgjARkZwM-s2CMBGRnFnzlafZfW5iiSrMrrhRC6KU8EaZF0fAFzSOuLG3cbn8&_nc_ohc=kUfkGStNaxwAX--VHbJ&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-XO7s1EgoWtfuJbzmt3BYOc0mtFHHS9YgCNu_ED5mpYQ&oe=6288994C"
          />
          <Avatar
            alt="Ragib Aseb"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/267761632_1715556935454628_2821436075403392734_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG71aMEraXEkkvRWP9SJCpLrgCfrpa9hBquAJ-ulr2EGt99FAFjgAGm0GcJXbyMrPa4_rMs9XL_9cdxfCNZrztX&_nc_ohc=psZ1Lg9o8T8AX84k_CY&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_JD8WbuGWbdn9ujuEXfUQT_HNfSQNdOgAPOMqOW7IpFQ&oe=6268CBAC"
          />
          <Avatar
            alt="Musaddik Habib"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/64218387_1312768325537120_268731121548656640_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFjhffhQLk1kn2dNn4qL9V0YCXPQ1ndvdJgJc9DWd290plEVCiXOlb1D1QRBsXbDFj3SYK7qiTwrfRe1XUP8ejW&_nc_ohc=v7EzqxDHNPEAX9WzKO6&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_lerjoRGcsBz6spOSj6RD2HrH5tp6lu7LLq8kyzNH-rA&oe=62891CE4"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/260321268_430368158465105_3483376745356900197_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEOn7tnhnBZX_6V0c8QI90m6YroOIFDVEbpiug4gUNURg8fcpaC_1oLHxhWdBNTUpoOKrOXHzFQSGg4sZJDjIax&_nc_ohc=I1BxRWdaZRgAX-eF5mg&_nc_ht=scontent.fdac80-1.fna&oh=00_AT9VsKSwMsl_qz7_g6fjbh4wcmV_VvQXSMb3uE_YcJaslg&oe=6267C20F"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/269836833_1720152978328357_1294620912148245869_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=106&ccb=1-5&_nc_sid=ad2b24&_nc_eui2=AeFjI0wDhpa6YzekmtPU7y9pH-7rwgBTQ8wf7uvCAFNDzATxkNn0ZIb7tqYY9zBslk7Z5SPn1HTfHQv8K8Z_2OqB&_nc_ohc=pepi1k5cPewAX-4gty4&tn=guIwyHaiIDB0f2lB&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-3w5se8VGRByldAGjaw5E2KJoxISaTRLcVCsDuPpx_uQ&oe=6268C7B9"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/273368468_142381761591528_539891927719102995_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGNsu4AzMjSbv8IJQp1FwdEZ2hoOGxVYwtnaGg4bFVjCzdMyIjs3adQkdk2d6hj41M0yC7au2gqVQsE34BKyp9v&_nc_ohc=PkOLRkqt4psAX8LpL1R&_nc_ht=scontent.fdac80-1.fna&oh=00_AT810XCAUBpn3gGZapKBh4ZS4wb49f3OPLk1BKJt_L0pug&oe=6269501B"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/268763934_1117077835497854_7825333094691783886_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFe6lsi1e39U69UXI43gnCegWxrU7M8WryBbGtTszxavJV0U1Vf_gWqpeqqep41uq6-TzXGQh5QSfF0JGbLN18T&_nc_ohc=96wxej6s5LIAX_K0snz&_nc_ht=scontent.fdac80-1.fna&oh=00_AT8ov31zO3TIZs3hCsgho3013nhiw29Vxf8LVJ0TSt3nDQ&oe=62686D5F"
          />
          <Avatar
            alt="Ragib Aseb"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/188527526_4029002303873659_6703948804548748930_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeExnkGtjIlVu-Vw8_nMERywe7oMZSwAPpZ7ugxlLAA-lq2Xo_6X5V7Mzc9j7cbne0n7CZvyoTFVTZXX5IEAcVQm&_nc_ohc=yJ7absInSSkAX8clQyI&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-bmGGmwPWI9jcdVJsga-ROryzorJRvTg33oKTLjdB_hA&oe=628AE145"
          />
          <Avatar
            alt="Musaddik Habib"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/64218387_1312768325537120_268731121548656640_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFjhffhQLk1kn2dNn4qL9V0YCXPQ1ndvdJgJc9DWd290plEVCiXOlb1D1QRBsXbDFj3SYK7qiTwrfRe1XUP8ejW&_nc_ohc=v7EzqxDHNPEAX9WzKO6&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_lerjoRGcsBz6spOSj6RD2HrH5tp6lu7LLq8kyzNH-rA&oe=62891CE4"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/260321268_430368158465105_3483376745356900197_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEOn7tnhnBZX_6V0c8QI90m6YroOIFDVEbpiug4gUNURg8fcpaC_1oLHxhWdBNTUpoOKrOXHzFQSGg4sZJDjIax&_nc_ohc=I1BxRWdaZRgAX-eF5mg&_nc_ht=scontent.fdac80-1.fna&oh=00_AT9VsKSwMsl_qz7_g6fjbh4wcmV_VvQXSMb3uE_YcJaslg&oe=6267C20F"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/269836833_1720152978328357_1294620912148245869_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=106&ccb=1-5&_nc_sid=ad2b24&_nc_eui2=AeFjI0wDhpa6YzekmtPU7y9pH-7rwgBTQ8wf7uvCAFNDzATxkNn0ZIb7tqYY9zBslk7Z5SPn1HTfHQv8K8Z_2OqB&_nc_ohc=pepi1k5cPewAX-4gty4&tn=guIwyHaiIDB0f2lB&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-3w5se8VGRByldAGjaw5E2KJoxISaTRLcVCsDuPpx_uQ&oe=6268C7B9"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/273368468_142381761591528_539891927719102995_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGNsu4AzMjSbv8IJQp1FwdEZ2hoOGxVYwtnaGg4bFVjCzdMyIjs3adQkdk2d6hj41M0yC7au2gqVQsE34BKyp9v&_nc_ohc=PkOLRkqt4psAX8LpL1R&_nc_ht=scontent.fdac80-1.fna&oh=00_AT810XCAUBpn3gGZapKBh4ZS4wb49f3OPLk1BKJt_L0pug&oe=6269501B"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/268763934_1117077835497854_7825333094691783886_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFe6lsi1e39U69UXI43gnCegWxrU7M8WryBbGtTszxavJV0U1Vf_gWqpeqqep41uq6-TzXGQh5QSfF0JGbLN18T&_nc_ohc=96wxej6s5LIAX_K0snz&_nc_ht=scontent.fdac80-1.fna&oh=00_AT8ov31zO3TIZs3hCsgho3013nhiw29Vxf8LVJ0TSt3nDQ&oe=62686D5F"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://scontent.fdac80-1.fna.fbcdn.net/v/t31.18172-8/19400524_1897718607216225_7942411579274032141_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a4a2d7&_nc_eui2=AeGCsiICAe7fdrHxkhoc4pWUkEqo6GA5CgGQSqjoYDkKAXhX7XgVifU5VTl1XgLOiFs6MsTkveeySe9OLQn7xMsu&_nc_ohc=sofTRV_caY8AX-ZXN35&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_R85_O0pEVGGFJhmj7M7Eeu86hCiZuLnNO6HlTk17KTg&oe=628942FF" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://scontent.fdac80-1.fna.fbcdn.net/v/t31.18172-8/19400202_1897717587216327_2648552381189794018_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a4a2d7&_nc_eui2=AeG3Y2pL8csAjuR_JVhFB1xRQpVOud0axjBClU653RrGMERuQyhixU_eswg5f7MJgjVZxkW08LgtMZt8unrnwj5u&_nc_ohc=Fd5JwiSSScwAX-Uz6JE&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-peMlFIEQ2pVA_irC95aPyOO5JHm-ge3vJB_84uS4OCA&oe=6287275F" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.18169-9/19366270_1897717713882981_2337997629415804945_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a4a2d7&_nc_eui2=AeEWOteUh6ljYOyMMNG1NC9HzFjfzGf9aXvMWN_MZ_1pe0Cy4pw_GIXbC3Sz7o2QZO53Zv7vMmrTyvpYPz1BMstN&_nc_ohc=GuXi8EpjmDwAX8fZevl&_nc_ht=scontent.fdac80-1.fna&oh=00_AT8hA_bmjhkW_UVUJfXuZHnuBUcDt7b7rsRNLLUlQhp0yw&oe=6289DEC6" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://scontent.fdac80-1.fna.fbcdn.net/v/t31.18172-8/19400348_1897718303882922_1008658610742676403_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a4a2d7&_nc_eui2=AeFwWnwaV5fH1jNX1pUQFp5zK8Lmz0gx4lcrwubPSDHiVxouftVRB2KFRXnwjNf3BFXXO9b6_h_7rdehtCPI9WRx&_nc_ohc=WyaeRVYkZxwAX_pSS5H&_nc_ht=scontent.fdac80-1.fna&oh=00_AT8gcyz-D5cU_-dKKqCxJgzxn8Sce72N_6h5nm2luix1Ng&oe=62891219" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.18169-9/19366518_1897718697216216_4547389163043001617_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a4a2d7&_nc_eui2=AeFjjbvfUKow9COqqbVF5thozkIDQY7to0HOQgNBju2jQUqorKW9tL6ZCsRCFiMCwarAHVhVjonvAUmzTTz8jNrd&_nc_ohc=WKTMMx-JamAAX9e6i6_&_nc_ht=scontent.fdac80-1.fna&oh=00_AT979UDoHf2b80SswZ_AXCbS2y0i084mQVx5ZtGxKea2LQ&oe=6287A941" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/82033492_2584416085213137_5494836138931650560_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a4a2d7&_nc_eui2=AeHFjrVpN4dC7EYhJBHdNkp5gYuihxQ8TmmBi6KHFDxOaVwKwn81HaQHkHuBpuG0EDdz9evZgLjshAAIJbI8yUOf&_nc_ohc=Senn_rreMlEAX9N36Cv&_nc_ht=scontent.fdac80-1.fna&oh=00_AT9AN8tDmx66L-_jTOa7UGvaILdlljaM5QcTENboFhPvRQ&oe=6288AF84" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Ahnaf Tahmeed"
                src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/118130404_1488447204672607_4744068522266326968_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEAPJujrOc86LCBb6dhuw0fFs-JAf-qe_8Wz4kB_6p7_0mE3z7OW6YdaVU-j0fZc7TyOzhFzj2OgtECnaPAQWYk&_nc_ohc=MBFBKNxeH94AX8yPmjh&_nc_ht=scontent.fdac80-1.fna&oh=00_AT8OS8-g7jE8_rrAru8DxXEBJNtZR_CIhGP0wYgl1RD6fQ&oe=628A6DAF"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Ahnaf Tahmeed"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sat Apr 23| 11:19 AM
                  </Typography>
                  {" — ID hack done? Metasploit chala taratari"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/269243926_2107627379405182_1747151565852090584_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEqfmcaRsUIlhsibqNXcs_hRaHq_UbimZtFoer9RuKZm66nEUEp66ph9io7g_0UCCfu_jYBb4B-7Jg6HT_nv3By&_nc_ohc=vLL6iblkf4wAX9XIeoH&_nc_ht=scontent.fdac80-1.fna&oh=00_AT8zjpEq4Y3xbFe8wSeOQHjy63QwkMmu2jKGNQI_PzkIkA&oe=6269718B"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Munna Khandakar"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sat Apr 23| 11:17 AM
                  </Typography>
                  {" — Iftar er por Al-Amin vai? "}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/188527526_4029002303873659_6703948804548748930_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeExnkGtjIlVu-Vw8_nMERywe7oMZSwAPpZ7ugxlLAA-lq2Xo_6X5V7Mzc9j7cbne0n7CZvyoTFVTZXX5IEAcVQm&_nc_ohc=yJ7absInSSkAX8clQyI&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-bmGGmwPWI9jcdVJsga-ROryzorJRvTg33oKTLjdB_hA&oe=628AE145"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Abrar Zaheen Abrar"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sat Apr 22| 10:23 AM
                  </Typography>
                  {" — Namaz seshe sagufta asbi?"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
