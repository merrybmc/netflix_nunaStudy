import { useQuery } from '@tanstack/react-query';
import api from '../apis/api';
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchPoppularMovies = () => {
  return api.get(`/movie/popular?api_key=${API_KEY}`);
};

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated?api_key=${API_KEY}`);
};

const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming?api_key=${API_KEY}`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPoppularMovies,
    select: (result) => result.data,
  });
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-topRated'],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};

export const useUpComingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-upComing'],
    queryFn: fetchUpComingMovies,
    select: (result) => result.data,
  });
};
