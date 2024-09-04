import { useQuery } from '@tanstack/react-query';
import api from '../apis/api';
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchSearchMovie = ({ keyword, page }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}&api_key=${API_KEY}`)
    : api.get(`/movie/popular?page=${page}&api_key=${API_KEY}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['movie-search', keyword, page],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
  });
};
