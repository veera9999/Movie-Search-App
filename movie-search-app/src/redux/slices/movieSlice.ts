import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface APIMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
function mapAPIMovieToCustomMovie(apiMovie: APIMovie): Movie {
  return {
    id: apiMovie.imdbID,
    title: apiMovie.Title,
    year: apiMovie.Year,
    image: apiMovie.Poster,
  };
}
export interface Movie {
  id: string;
  title: string;
  year: string;
  image: string;
}
interface MoviesState {
  movies: Movie[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  status: "idle",
  error: null,
};
export const fetchMovies = createAsyncThunk<any, string>(
  "movies/fetchMovies",
  async (query) => {
    try {
      // Introduce a delay (if you want to simulate network latency)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=263d22d8`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const apiMovies: APIMovie[] = data.Search;
      return apiMovies.map(mapAPIMovieToCustomMovie);
    } catch (error) {
      console.log(`Failed to fetch movies: ${error}`);
      throw error; // Return error to properly handle it in Redux
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.status = "success";
          state.movies = action.payload;
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export default movieSlice.reducer;
