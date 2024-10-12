// SeasonalPlants.js

import React, { useState } from 'react';
import { IonContent, IonModal, IonButton } from '@ionic/react';
import './SeasonalPlants.css';

const SeasonalPlants: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>('');

  const handleSeasonClick = (season: string) => {
    setSelectedSeason(season);
  };

  const renderSeasonModal = () => {
    switch (selectedSeason) {
      case 'spring':
        return (
          <IonModal isOpen={selectedSeason === 'spring'}>
            <div className="seasonal-plant-guide">
              <h2>Spring Planting Guide</h2>
              <p>In spring, you can plant:</p>
              <ul>
                <li>Tomatoes</li>
                <li>Lettuce</li>
                <li>Carrots</li>
                <li>Roses</li>
                <li>Lavender</li>
                <li>Tulips</li>
                <li>Daisies</li>
              <li>Blueberries</li>
              <li>Strawberries</li>
              <li>Basil</li>
              <li>Green beans</li>
              <li>Peas</li>
              <li>Spinach</li>
              <li>Arugula</li>
              <li>Cilantro</li>
                {/* Add more flower plants as needed */}
              </ul>
              <IonButton onClick={() => setSelectedSeason('')}>Close</IonButton>
            </div>
          </IonModal>
        );
      case 'summer':
        return (
          <IonModal isOpen={selectedSeason === 'summer'}>
            <div className="seasonal-plant-guide">
              <h2>Summer Planting Guide</h2>
              <p>In summer, you can plant:</p>
              <ul>
                <li>Peppers</li>
                <li>Eggplant</li>
                <li>Cucumbers</li>
                <li>Sunflowers</li>
                <li>Daisies</li>
                <li>Lilies</li>
                <li>Watermelon</li>
              <li>Corn</li>
              <li>Zucchini</li>
              <li>Basil</li>
              <li>Tomatoes</li>
              <li>Green beans</li>
              <li>Squash</li>
              <li>Okra</li>
              <li>Strawberries</li>
                {/* Add more flower plants as needed */}
              </ul>
              <IonButton onClick={() => setSelectedSeason('')}>Close</IonButton>
            </div>
          </IonModal>
        );
      case 'fall':
        return (
          <IonModal isOpen={selectedSeason === 'fall'}>
            <div className="seasonal-plant-guide">
              <h2>Fall Planting Guide</h2>
              <p>In fall, you can plant:</p>
              <ul>
                <li>Spinach</li>
                <li>Kale</li>
                <li>Radishes</li>
                <li>Mums</li>
                <li>Pansies</li>
                <li>Daffodils</li>
                <li>Pumpkins</li>
              <li>Apples</li>
              <li>Broccoli</li>
              <li>Garlic</li>
              <li>Cauliflower</li>
              <li>Beets</li>
              <li>Brussels sprouts</li>
              <li>Carrots</li>
              <li>Rutabaga</li>
                {/* Add more flower plants as needed */}
              </ul>
              <IonButton onClick={() => setSelectedSeason('')}>Close</IonButton>
            </div>
          </IonModal>
        );
      default:
        return null;
    }
  };

  return (
    <IonContent>
      <h2 className="seasonal-title">Seasonal Plant Guide</h2> {/* Add title here */}

      <div className="seasonal-plants-container">
        <div className="seasonal-plant" onClick={() => handleSeasonClick('spring')}>
          <img
            className={`seasonal-plant-image ${selectedSeason === 'spring' && 'active'}`}
            src="https://cdn.shopify.com/s/files/1/0778/2679/files/spring_trees.jpg?v=1616252131"
            alt="Spring Planting"
          />
          <div className="season-label">Spring</div>
        </div>

        <div className="seasonal-plant" onClick={() => handleSeasonClick('summer')}>
          <img
            className={`seasonal-plant-image ${selectedSeason === 'summer' && 'active'}`}
            src="https://cdn.firstcry.com/education/2022/04/29104151/1007648908.jpg"
            alt="Summer Planting"
          />
          <div className="season-label">Summer</div>
        </div>

        <div className="seasonal-plant" onClick={() => handleSeasonClick('fall')}>
          <img
            className={`seasonal-plant-image ${selectedSeason === 'fall' && 'active'}`}
            src="https://media.cnn.com/api/v1/images/stellar/prod/210316134817-03-wisdom-project-autumn.jpg?q=w_4000,h_2250,x_0,y_0,c_fill"
            alt="Fall Planting"
          />
          <div className="season-label">Fall</div>
        </div>
      </div>
      {renderSeasonModal()}
    </IonContent>
  );
};

export default SeasonalPlants;
