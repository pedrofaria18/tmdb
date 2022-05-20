import { ThemeProvider } from "styled-components";
import { GenresProvider } from "./contexts/useGenres";
import { MoviesProvider } from "./contexts/useMovies";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GenresProvider>
        <MoviesProvider>
          <Home />
        </MoviesProvider>
      </GenresProvider>
    </ThemeProvider>
  );
}

export default App;
