import React, { useContext } from "react";
import { FavoriteContext } from "../components/FavoriteContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DrawerAppBar from "../components/DrawerAppBar";
import { Link } from "react-router-dom";

export default function Favorite() {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <>
      <DrawerAppBar />
      <Box sx={{ bgcolor: "background.paper", p: 6 }}>
        <Container maxWidth="sm">
          <Typography
            variant="p"
            fontSize="3rem"
            fontWeight="600"
            letterSpacing="1px"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Favorite Surah
          </Typography>
        </Container>
      </Box>
      <Container className="" maxWidth="md">
        <Grid container spacing={4}>
          {favorites.map((surah) => (
            <Grid item key={surah.nomor} xs={12} sm={6} md={4}>
              <Link className="link" to={`/${surah.nomor}`}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent className="">
                    <Typography
                      textAlign="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {surah.nama}
                    </Typography>
                    <Typography
                      textAlign="center"
                      fontSize="1.3rem"
                      fontWeight="400"
                    >
                      {surah.nama_latin}
                    </Typography>
                    <Box mt="1rem" textAlign="center">
                      <Typography
                        padding="5px"
                        fontSize="0.8rem"
                        bgcolor="green"
                        color="white"
                        margin="4px"
                        letterSpacing="1.5px"
                        textAlign="center"
                        borderRadius="0.5rem"
                      >
                        {surah.arti}
                      </Typography>
                      <Typography
                        padding="5px"
                        fontSize="0.8rem"
                        bgcolor="teal"
                        color="white"
                        margin="4px"
                        letterSpacing="1.5px"
                        textAlign="center"
                        borderRadius="0.5rem"
                      >
                        {surah.jumlah_ayat} ayat
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
