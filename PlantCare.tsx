import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCol, IonGrid, IonItem, IonLabel, IonList, IonRow, IonButton, IonImg, IonModal } from '@ionic/react';
import './PlantCare.css'; // Import the CSS file

interface Plant {
  name: string;
  care: string;
  fertilizer: string; // Add fertilizer property to the Plant interface
  image: string;
}

const PlantCare: React.FC = () => {
  // Sample plant data with images
  const plants: Plant[] = [
    { 
      name: 'Rose', 
      care: 'Watering: Tomorrow, Pruning: Next Week',
      fertilizer: 'Fertilizer: Every 2 weeks', // Add fertilizer detail
      image: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054g'
    },
    { 
      name: 'Lavender', 
      care: 'Watering: Today, Pruning: Next Month',
      fertilizer: 'Fertilizer: Every month', // Add fertilizer detail
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmhxhywDiG6sZOoFkzfLwEfhpw2woBHlIFv04BD1xDt2um5Fb_'
    },
    { 
      name: 'Sunflower', 
      care: 'Watering: Every 2 days, Pruning: Not required',
      fertilizer: 'Fertilizer: Every 3 weeks', // Add fertilizer detail
      image: 'https://images.squarespace-cdn.com/content/v1/5bbfbb9e523958e4f1427d15/c8055e91-3f8e-4604-902b-582452e781c2/The+Best+Time+to+Plant+Sunflowers+backyard'
    },
    { 
      name: 'Tulip', 
      care: 'Watering: Every day, Pruning: After blooming season',
      fertilizer: 'Fertilizer: Every 4 weeks', // Add fertilizer detail
      image: 'https://assets.eflorist.com/site/00004321/assets/products/PHR_/sku8861837.jpg'
    },
    { 
      name: 'Daisy', 
      care: 'Watering: Every 3 days, Pruning: After flowering',
      fertilizer: 'Fertilizer: Every 2 weeks', // Add fertilizer detail
      image: 'https://www.jollyfarmer.com/wp-content/uploads/Gerbera-Revolution-Bcol-Red-Lemon-3.jpg'
    },
    { 
      name: 'Orchid', 
      care: 'Watering: Once a week, Keep in indirect sunlight',
      fertilizer: 'Fertilizer: Every 2 months', // Add fertilizer detail
      image: 'https://m.media-amazon.com/images/I/71kjeOuSuHL._AC_UF894,1000_QL80_DpWeblab_.jpg'
    },
    { 
      name: 'Geranium', 
      care: 'Watering: Every 4 days, Pruning: Deadhead spent blooms',
      fertilizer: 'Fertilizer: Every 3 weeks', // Add fertilizer detail
      image: 'https://www.gardendesign.com/pictures/images/900x705Max/site_3/boldly-dark-red-geranium-in-container-geraniums-in-pots-proven-winners_16822.jpg'
    },
    { 
      name: 'Daffodil', 
      care: 'Watering: Once a week, Pruning: Remove spent flowers',
      fertilizer: 'Fertilizer: Every 4 weeks', // Add fertilizer detail
      image: 'https://mobileimages.lowes.com/productimages/d07e325d-850d-473e-b9dc-ec4a4e000b63/03693248.jpg'
    },
    { 
      name: 'Carnation', 
      care: 'Watering: Every 3 days, Pruning: Deadhead spent blooms',
      fertilizer: 'Fertilizer: Every 3 weeks', // Add fertilizer detail
      image: 'https://cdn.mos.cms.futurecdn.net/Ff99Wr4TCYgbaA4V38iym.jpg'
    },
    { 
      name: 'Peony', 
      care: 'Watering: Once a week, Pruning: After blooming season',
      fertilizer: 'Fertilizer: Every 4 weeks', // Add fertilizer detail
      image: 'https://laidbackgardener.blog/wp-content/uploads/2020/03/200324a-oslo-green-works.nl_.jpg'
    },
    { 
      name: 'Lily', 
      care: 'Watering: Once a week, Pruning: Remove spent flowers',
      fertilizer: 'Fertilizer: Every 3 weeks', // Add fertilizer detail
      image: 'https://mobileimages.lowes.com/productimages/86ea2055-b3b3-41fa-b38f-76c66dc74e1f/00851745.jpg'
    },
    { 
      name: 'Hydrangea', 
      care: 'Watering: Every 2 days, Keep in shade',
      fertilizer: 'Fertilizer: Every 4 weeks', // Add fertilizer detail
      image: 'https://treemart.org/wp-content/uploads/2023/03/pl2000037670_card3_lg.jpg'
    },
    // Add more plant data as needed
  ];

  const [showWateringDetails, setShowWateringDetails] = useState<boolean>(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null); // Specify the type explicitly

  const showPlantDetails = (plant: Plant) => {
    setSelectedPlant(plant);
    setShowWateringDetails(true);
  };

  return (
    <IonContent>
      <IonToolbar className='plant-care-title'>
          <IonTitle>Plant Care</IonTitle>
        </IonToolbar>
      <div className="plant-grid"> {/* Use a div with a class to apply CSS grid styling */}
        {plants.map((plant, index) => (
          <div className="plant-card" key={index}> {/* Use a div with a class for each plant card */}
            <IonCard>
              <IonImg 
                src={plant.image} 
                alt={plant.name} 
                onClick={() => showPlantDetails(plant)} 
              />
              <IonCardHeader>
                {plant.name}
              </IonCardHeader>
              
            </IonCard>
          </div>
        ))}
      </div>

      {/* Modal for displaying watering details */}
      <IonModal isOpen={showWateringDetails} onDidDismiss={() => setShowWateringDetails(false)}>
  <IonContent>
    <IonCard>
      <IonCardHeader>
        {selectedPlant && selectedPlant.name} Care Details
      </IonCardHeader>
      <IonCardContent>
        {selectedPlant && (
          <>
            <IonItem>
              <IonLabel>Watering:</IonLabel>
              <IonLabel>{selectedPlant.care}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Fertilizer:</IonLabel>
              <IonLabel>{selectedPlant.fertilizer}</IonLabel>
            </IonItem>
          </>
        )}
      </IonCardContent>
    </IonCard>
    <IonButton onClick={() => setShowWateringDetails(false)}>Close</IonButton>
  </IonContent>
</IonModal>

    </IonContent>
    
  );
};

export default PlantCare;
