import { useQuery } from '@tanstack/react-query';
import api from '../apis/api';
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchSearchMovie = ({ keyword }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&api_key=${API_KEY}`)
    : api.get(`/movie/search?api_key=${API_KEY}`);
};

export const useSearchMovieQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ['movie-search', keyword],
    queryFn: () => fetchSearchMovie({ keyword }),
    select: (result) => result.data,
  });
};
