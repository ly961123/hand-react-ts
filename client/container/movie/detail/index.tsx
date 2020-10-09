import React, { useState, useEffect, useContext, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import apiClient from '@rootDir/client/apiClient';
import { IMovieDetail, NowPlayingData } from '@rootDir/model/movie.ts';
import { GlobalState } from '../../application/index';
import Content from '../components/MovieContent';
import Picture from '../components/Picture';
import './index.scss';

const defaultMovieData = {
  id: '',
  name: '',
  nation: '',
  poster: '',
  grade: '',
  runtime: 0,
  filmType: {
    name: '',
    value: 0,
  },
  actors: [],
  premiereAt: 0,
  synopsis: '',
  photos: '',
  stagePhoto: [],
}

const Detail = ({
  match,
  history,
}: Pick<RouteComponentProps<{movieId: string}>, 'match' | 'history'>) => {
  const { movieId } = match.params;
  const { setShowToast } = useContext(GlobalState);
  const [movieDetail, setMovieDetail] = useState<NowPlayingData>(defaultMovieData);
  const [showPicture, setShowPicture] = useState(false);
  const [textHeight, setTextHeight] = useState(0);

  const fetchDetail = async () => {
    const data: IMovieDetail = await apiClient.get(
      `movie/${movieId}/detail`,
      {
        params: { movieId },
      },
    );
    return data;
  };
  console.log(movieDetail, 'movieDetail');
  
  useEffect(() => {
    setShowToast(true);
    fetchDetail().then((res: IMovieDetail) => {
      setMovieDetail(res.data);
      setShowToast(false);
    }).catch((err) => {
      console.log(err, '出错了');
      setShowToast(false);
    })
  }, []);

  useEffect(() => {
    getTextHeight();
  },[movieDetail])

  const getTextHeight = useCallback(() => {
    const ele = document.getElementById('center_describe_text');
    setTextHeight(ele?.offsetHeight || 0);
  },[movieDetail]);

  return (
    <div className='movie_detail'>
      {
      !showPicture ?
        <Content
          movieDetail={movieDetail}
          textHeight={textHeight}
          setShowPicture={setShowPicture}
          history={history}
        /> : <Picture
          stagePhoto={movieDetail.stagePhoto}
          setShowPicture={setShowPicture}
        />
      }
    </div>
  );
}

export default Detail;
