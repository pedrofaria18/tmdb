import CloseSVG from "../../../assets/close.svg";
import { Genre } from "../../../contexts/@types";
import { useGenres } from "../../../contexts/useGenres";

import { Container } from "./styles";

interface GenreItemProps {
  genre: Genre;
}

export const GenreItem = ({ genre }: GenreItemProps) => {
  const { id, name, selected } = genre;
  const { handleUpdateGenre } = useGenres();

  return (
    <Container
      selected={selected}
      onClick={() => selected === false && handleUpdateGenre(id)}
    >
      <span>{name}</span>
      {selected === true && (
        <img
          src={CloseSVG}
          alt="Ícone de fechar"
          onClick={() => handleUpdateGenre(id)}
        />
      )}
    </Container>
  );
};
