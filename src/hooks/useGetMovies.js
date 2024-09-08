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

const fetchDetailMovies = ({ id }) => {
  return api.get(`/movie/${id}?api_key=${API_KEY}`);
};

const fetchMoviesVideo = ({ id }) => {
  return api.get(`/movie/${id}/videos?api_key=${API_KEY}`);
};

const fetchMoviesReviews = ({ id }) => {
  return api.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
};

const fetchMoviesRecommendations = ({ id }) => {
  return api.get(`/movie/${id}/recommendations?api_key=${API_KEY}`);
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

export const useDetailMovieQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-detail'],
    queryFn: () => fetchDetailMovies({ id }),
    select: (result) => result.data,
  });
};

export const useMovieVideoQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-video'],
    queryFn: () => fetchMoviesVideo({ id }),
    select: (result) => result.data,
  });
};

export const useMovieReviewsQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-reviews'],
    queryFn: () => fetchMoviesReviews({ id }),
    select: (result) => result.data,
  });
};

export const useMovieRecommendationsQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-recommendations'],
    queryFn: () => fetchMoviesRecommendations({ id }),
    select: (result) => result.data,
  });
};
