import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Banner from '../../components/Banner';

const Home = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch('src/data/db.json')
      .then(response => response.json())
      .then(data => {
        setCardsData(data);
      })
      .catch(error => console.error('Error loading cards data: ', error));
  }, []);

  if (cardsData.length === 0) {
    return <div>Loading cards...</div>;
  }

  return (
    <section className='home'>
      <Banner backgroundImage={"src/assets/image/banner.jpeg"} title={"Chez vous, partout et ailleurs"}/>
      <div className='cards-container'>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title} 
            backgroundImage={card.cover} 
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
