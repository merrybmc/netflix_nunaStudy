import { useQuery } from '@tanstack/react-query';
import api from '../apis/api';
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchPoppularMovies = () => {
  return api.get(`/movie/popular?api_key=${API_KEY}`);
  // return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPoppularMovies,
    select: (result) => result.data,
  });
};
