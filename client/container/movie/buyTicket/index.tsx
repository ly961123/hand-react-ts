import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const BuyTicket = ({
  match,
}: Pick<RouteComponentProps<{movieId: string}>, 'match'>) => {
  const [text, setText] = useState('');
  const { movieId } = match.params
  useEffect(() => {
    console.log(movieId, 'movieId');
    setText('购票');
  }, []);

  return (
    <div>{text}</div>
  );
}

export default BuyTicket;
