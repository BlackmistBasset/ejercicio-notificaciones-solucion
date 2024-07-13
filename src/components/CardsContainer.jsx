import { useState, useEffect } from "react";
import { Container, Pagination, TextField } from "@mui/material";
import { CharacterCard } from "./CharacterCard";
import axios from "axios";

export const CardsContainer = () => {
  const [personajes, setPersonajes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");

  const urlBase = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${nameFilter}`;

  useEffect(() => {
    console.log(urlBase, totalPages);
    axios.get(urlBase).then((response) => {
      setPersonajes(response.data.results);
      setTotalPages(response.data.info.pages);
    });
  }, [currentPage, nameFilter]);

  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        sx={{
          gridColumn: "span 3",
          justifySelf: "center",
          marginBottom: "30px",
        }}
        onChange={(e, page) => {
          console.log(page);
          setCurrentPage(page);
        }}
      />
      {personajes?.map(({ name, image, id }) => {
        return <CharacterCard name={name} img={image} key={id} />;
      })}
    </Container>
  );
};
