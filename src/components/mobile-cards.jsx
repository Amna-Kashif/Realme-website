import React from 'react';

const CardComponent = () => {
  const cardData = [
    {
      title: 'realme C53',
      description: 'Champion Gold, 33W Champion Charge',
      price: 'Rs.39,999',
      image: 'src/assets/card-img1.webp',
      buttonText: 'New'
    },
    {
      title: 'realme Note 50',
      description: 'Long-lasting Value Beast',
      price: 'Rs.24,999',
      image: 'src/assets/realme note 50.webp',
      buttonText: 'New'
    },
    {
      title: 'realme C63',
      description: '3 min Charge, 60 min T20 Match',
      price: 'Rs.32,999',
      image: 'src/assets/realme C63.webp',
      buttonText: 'New'
    },
    {
      title: 'realme C67',
      description: '108MP 3x In-sensor Zoom Camera,Snapdragon 685',
      price: 'Rs.39,999',
      image: 'src/assets/realme C67.webp',
      buttonText: 'New'
      },
    {
      title: 'realme C65',
      description: 'Unbreakable Champion',
      price: 'Rs.49,999',
      image: 'src/assets/realme C65.webp',
      buttonText: 'New'
      },
    {
      title: 'realme C61',
      description: 'Hard to break',
      price: 'Rs.32,999',
      image: 'src/assets/realme C61.webp',
      buttonText: 'New'
      },
    {
      title: 'realme Buds Q',
      description: 'Music Never Ends',
      price: 'Rs.7,999',
      image: 'src/assets/realme buds Q.webp',
      buttonText: 'New'
      },
    {
      title: 'realme Buds T110',
      description: 'Champion Gold, 33W ChampionCharge',
      price: 'Rs.4,999',
      image: 'src/assets/realme buds T110.webp',
      buttonText: 'New'
      },
  ];


  return (
    <div className="container">
      <div className="row">
      <h1 style={{textAlign:"left", marginTop:'50px' , fontWeight:"bold"}}>SmartPhones</h1>
        {cardData.map((card, index) => (
          <div key={index} className="col-md-6 col-12 mb-4">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 card-content">
                  <a href="#" className="btn btn-primary">{card.buttonText}</a>
                  <h2 className="fs-4 fw-bold">{card.title}</h2>
                  <p className="text-secondary fs-6">{card.description}</p>
                  <p className="fw-bold mt-5">{card.price}</p>
                </div>
                <div className="col-md-6">
                  <img src={card.image} className="card-img img-fluid" alt={card.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  

export default CardComponent;
