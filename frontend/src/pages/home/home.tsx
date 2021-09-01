import React, { useEffect, useState } from 'react';

import { Welcome } from '../../components/welcome/welcome';

export const Home = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      const infoResponse = await fetch('http://api.learn-kubernetes/');
      const infoJson = await infoResponse.json();
      setInfo(infoJson);
    };

    getInfo();
  });

  return <Welcome info={info} />;
};
