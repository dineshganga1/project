import React, { useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './MyGarden.css';

// Sample plant data with images and details
const initialPlants = [
  { 
    name: 'Rose', 
    quantity: 5, 
    datePlanted: '04-18-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054g',
    description: 'Roses are beautiful flowering plants known for their fragrant blooms. Their stems are usually prickly, and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape, bursting with colors ranging from pastel pink, peach, and cream to vibrant yellow, orange, and red. Many roses are fragrant, and some produce berry-like fruits called hips.',
    careTips: 'Roses require regular watering and pruning for optimal growth. They generally need at least 6 hours of full sun a day (preferably in the morning), well-drained and nutrient-rich soil, and moderate amounts of water. Water should only be applied directly to the root zone, not to the leaf surface.',
  },
  { 
    name: 'Lavender', 
    quantity: 2, 
    datePlanted: '04-15-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmhxhywDiG6sZOoFkzfLwEfhpw2woBHlIFv04BD1xDt2um5Fb_',
    description: 'Lavender is a versatile herb with aromatic purple flowers. Lavender is a small, branching shrub that can grow up to 24 inches tall. It has a broad rootstock with woody branches and green, leafy shoots. The leaves are narrow, gray-green, and oblong, with a silvery down that covers them. The flowers are small and blue-violet, arranged in spirals above the foliage. The plant\'s fragrance comes from the oil in the flowers, which are covered in shining glands.',
    careTips: 'Lavender thrives in well-drained soil and full sunlight. It requires occasional pruning to maintain shape and encourage new growth. Place the pot in a sunny location with at least 6 hours of sunlight per day. Water the plant regularly, but don\'t overwater as lavender doesn\'t like wet feet. Fertilize the plant once a month with a balanced, water-soluble fertilizer.',
  },
  { 
    name: 'Sunflower', 
    quantity: 9, 
    datePlanted: '04-15-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://images.squarespace-cdn.com/content/v1/5bbfbb9e523958e4f1427d15/c8055e91-3f8e-4604-902b-582452e781c2/The+Best+Time+to+Plant+Sunflowers+backyard',
    description: 'Sunflowers are tall, majestic plants with large, yellow blooms that follow the sun. Sunflowers belong to the Asteraceae family and are native to North and South America. They have rough, hairy stems and large, broad leaves. Sunflower flowers consist of numerous tiny flowers clustered together in a central disk surrounded by large, colorful petals. These vibrant blooms attract bees, butterflies, and birds to the garden.',
    careTips: 'Plant sunflowers in full sunlight and provide adequate water. They prefer well-drained, fertile soil. Sunflowers are relatively low-maintenance plants but may require support for their tall stems, especially in windy conditions. Deadhead spent flowers to encourage continuous blooming and prevent self-seeding.',
  },
  // Add descriptions and care tips for remaining plants
  { 
    name: 'Tulip', 
    quantity: 3,
    datePlanted: '04-15-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://assets.eflorist.com/site/00004321/assets/products/PHR_/sku8861837.jpg',
    description: 'Tulips are colorful spring-blooming flowers that come in a variety of vibrant hues. Tulips are bulbous perennial plants that belong to the genus Tulipa. They have long, slender stems and cup-shaped flowers with six petal-like tepals. Tulip flowers can be single or double, and they come in an array of colors, including red, yellow, orange, pink, purple, and white. Tulips are popular garden plants and are widely grown for their ornamental value.',
    careTips: 'Plant tulip bulbs in the fall for spring blooms. Choose a well-drained location with full sunlight or partial shade. Tulips prefer soil that is moist but not waterlogged. After blooming, allow the foliage to die back naturally to replenish the bulb for the next growing season. Fertilize tulips in the fall with a balanced fertilizer to promote healthy growth.',
  },
  { 
    name: 'Daisy', 
    quantity: 4, 
    datePlanted: '03-31-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://www.jollyfarmer.com/wp-content/uploads/Gerbera-Revolution-Bcol-Red-Lemon-3.jpg',
    description: 'Daisies are cheerful, dainty flowers with white petals and a yellow center. Daisies belong to the Asteraceae family and are native to Europe and Asia. They have simple, composite flowers with a central disk surrounded by white, pink, or purple ray florets. Daisies are easy-to-grow plants that thrive in a wide range of conditions. They are commonly grown in gardens, borders, and containers for their long-lasting blooms and attractive foliage.',
    careTips: 'Plant daisies in full sunlight or partial shade in well-drained soil. They are drought-tolerant once established but benefit from regular watering during dry periods. Deadhead spent flowers to prolong blooming and prevent self-seeding. Divide clumps of daisies every few years to maintain vigor and prevent overcrowding.',
  },
  { 
    name: 'Orchid', 
    quantity: 10, 
    datePlanted: '02-29-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://m.media-amazon.com/images/I/71kjeOuSuHL._AC_UF894,1000_QL80_DpWeblab_.jpg',
    description: 'Orchids are elegant, exotic flowers prized for their beauty and variety. Orchids belong to the Orchidaceae family, one of the largest families of flowering plants. They are native to tropical regions around the world and are known for their intricate flowers and diverse forms. Orchids can be epiphytic, terrestrial, or lithophytic, depending on their habitat. They come in a wide range of colors, sizes, and shapes, making them popular ornamental plants in homes and gardens.',
    careTips: 'Orchids require bright, indirect sunlight and consistent moisture to thrive. Avoid placing them in direct sunlight, as this can scorch their leaves. Use a well-draining orchid potting mix to ensure proper drainage and aeration for the roots. Water orchids when the potting mix is dry to the touch, usually every 1-2 weeks. Fertilize orchids regularly with a balanced orchid fertilizer to promote healthy growth and blooming.',
  },
  { 
    name: 'Geranium', 
    quantity: 11, 
    datePlanted: '03-28-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://www.gardendesign.com/pictures/images/900x705Max/site_3/boldly-dark-red-geranium-in-container-geraniums-in-pots-proven-winners_16822.jpg',
    description: 'Geraniums are popular garden plants with colorful blooms and aromatic foliage. Geraniums belong to the Geraniaceae family and are native to temperate regions of the world. They have palmately lobed leaves and clusters of flowers in various colors, including red, pink, white, and purple. Geraniums are easy-to-grow plants that thrive in a wide range of conditions. They are commonly grown in gardens, borders, containers, and hanging baskets for their long-lasting blooms and attractive foliage.',
    careTips: 'Geraniums prefer full sunlight and well-drained soil. Plant them in a location with at least 6 hours of sunlight per day for optimal blooming. Water geraniums deeply but infrequently, allowing the soil to dry out slightly between waterings. Deadhead spent flowers regularly to encourage continuous blooming and prevent seed formation. Fertilize geraniums every 4-6 weeks with a balanced fertilizer to promote healthy growth and flowering.',
  },
  { 
    name: 'Daffodil', 
    quantity: 6, 
    datePlanted: '03-28-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://mobileimages.lowes.com/productimages/d07e325d-850d-473e-b9dc-ec4a4e000b63/03693248.jpg',
    description: 'Daffodils are spring-blooming flowers known for their trumpet-shaped blooms. Daffodils belong to the Amaryllidaceae family and are native to Europe and North Africa. They have long, narrow leaves and trumpet-shaped flowers in shades of yellow, white, and orange. Daffodils are popular garden plants that herald the arrival of spring with their cheerful blooms. They are commonly grown in gardens, borders, and containers for their early color and delightful fragrance.',
    careTips: 'Plant daffodil bulbs in the fall for spring blooms. Choose a sunny or partially shaded location with well-drained soil. Daffodils prefer soil that is moist but not waterlogged, especially during their growing season. After flowering, allow the foliage to die back naturally to replenish the bulb for the next growing season. Fertilize daffodils in the fall with a balanced fertilizer to promote healthy growth and blooming.',
  },
  { 
    name: 'Carnation', 
    quantity: 5, 
    datePlanted: '02-17-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://cdn.mos.cms.futurecdn.net/Ff99Wr4TCYgbaA4V38iym.jpg',
    description: 'Carnations are classic garden flowers with ruffled petals and a spicy fragrance. Carnations belong to the Caryophyllaceae family and are native to Eurasia. They have narrow, lance-shaped leaves and double or single flowers in shades of pink, red, white, and yellow. Carnations are popular cut flowers and garden plants that symbolize love, affection, and admiration. They are commonly grown in gardens, borders, and containers for their long-lasting blooms and attractive fragrance.',
    careTips: 'Carnations prefer well-drained soil and full sunlight. Plant them in a location with at least 6 hours of sunlight per day for optimal blooming. Water carnations deeply but infrequently, allowing the soil to dry out slightly between waterings. Deadhead spent flowers regularly to encourage continuous blooming and prevent seed formation. Fertilize carnations every 4-6 weeks with a balanced fertilizer to promote healthy growth and flowering.',
  },
  { 
    name: 'Peony', 
    quantity: 7, 
    datePlanted: '03-28-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://laidbackgardener.blog/wp-content/uploads/2020/03/200324a-oslo-green-works.nl_.jpg',
    description: 'Peonies are large, showy flowers available in a range of colors. Peonies belong to the Paeoniaceae family and are native to Asia, Europe, and North America. They have large, deeply lobed leaves and fragrant, double or single flowers in shades of pink, red, white, and yellow. Peonies are popular garden plants and cut flowers that symbolize prosperity, romance, and good fortune. They are commonly grown in gardens, borders, and containers for their stunning blooms and attractive foliage.',
    careTips: 'Plant peonies in fertile, well-drained soil in full sunlight. Choose a location with good air circulation to prevent fungal diseases. Provide support for heavy blooms using stakes or rings to prevent flopping. Water peonies deeply but infrequently, allowing the soil to dry out slightly between waterings. Fertilize peonies in the spring with a balanced fertilizer to promote healthy growth and flowering.',
  },
  { 
    name: 'Lily', 
    quantity: 4, 
    datePlanted: '04-05-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://mobileimages.lowes.com/productimages/86ea2055-b3b3-41fa-b38f-76c66dc74e1f/00851745.jpg',
    description: 'Lilies are elegant, fragrant flowers available in various colors and shapes. Lilies belong to the Liliaceae family and are native to temperate regions of the Northern Hemisphere. They have tall, erect stems and trumpet-shaped flowers in shades of white, yellow, pink, red, and orange. Lilies are popular garden plants and cut flowers that symbolize purity, renewal, and passion. They are commonly grown in gardens, borders, and containers for their stunning blooms and delightful fragrance.',
    careTips: 'Plant lily bulbs in the fall for spring or summer blooms. Choose a location with well-drained soil and partial sunlight. Lilies prefer soil that is moist but not waterlogged, especially during their growing season. Mulch around the base of the plants to retain moisture and suppress weeds. Fertilize lilies in the spring with a balanced fertilizer to promote healthy growth and flowering.',
  },
  { 
    name: 'Hydrangea', 
    quantity: 8, 
    datePlanted: '04-08-2024', // Date of planting (YYYY-MM-DD format)
    image: 'https://treemart.org/wp-content/uploads/2023/03/pl2000037670_card3_lg.jpg',
    description: 'Hydrangeas are shrubs known for their large, colorful flower clusters. Hydrangeas belong to the Hydrangeaceae family and are native to Asia and the Americas. They have large, serrated leaves and showy, spherical or mophead flowers in shades of blue, pink, purple, and white. Hydrangeas are popular garden shrubs that symbolize gratitude, grace, and beauty. They are commonly grown in gardens, borders, and containers for their stunning blooms and attractive foliage.',
    careTips: 'Hydrangeas require well-drained soil and partial sunlight to thrive. Plant them in a location with morning sun and afternoon shade for optimal blooming. Water hydrangeas deeply but infrequently, allowing the soil to dry out slightly between waterings. Prune hydrangeas after flowering to promote new growth and maintain shape. Adjust the pH of the soil to influence the flower color; acidic soil produces blue flowers, while alkaline soil produces pink flowers.',
  },
  // Add more plant data as needed
];

const MyGarden: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false); // Separate state for the add plant modal
  const [newPlantName, setNewPlantName] = useState<string>(''); // State variable for the new plant name
  const [plants, setPlants] = useState<any[]>(initialPlants); // State variable for storing all plants
  const [showPlantDetailsModal, setShowPlantDetailsModal] = useState<boolean>(false); // State variable for showing plant details modal
  const [selectedPlant, setSelectedPlant] = useState<any>(null); // State variable for storing selected plant

  // Function to handle adding a new plant
  const handleAddPlant = () => {
    setShowAddModal(true); // Open the add plant modal
  };

  // Function to handle confirming the addition of a new plant
  const handleModalConfirm = () => {
    // Create a new plant object with the entered name
    const newPlant = { 
      name: newPlantName, 
      quantity: 0, 
      image: '', 
      description: 'No description available', 
      careTips: 'No care tips available',
      datePlanted: '', // You might want to add datePlanted here as well
    }; 
    // Update the list of plants with the new plant
    setPlants([...plants, newPlant]);
    // Reset the new plant name and close the modal
    setNewPlantName('');
    setShowAddModal(false);
  };

  // Function to handle clicking on a plant card to show its details
  const handlePlantClick = (plant: any) => {
    setSelectedPlant(plant);
    setShowPlantDetailsModal(true);
  };

  // Function to handle closing the plant details modal
  const handleClosePlantDetailsModal = () => {
    setShowPlantDetailsModal(false);
    setSelectedPlant(null);
  };

  return (
    <>
      <IonContent scrollY={true}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader className="my-garden-title">
                  My Garden
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="4" className="ion-text-">
              <IonButton className="custom-button" onClick={handleAddPlant}>
                Add Plant
              </IonButton>
            </IonCol>
          </IonRow>

          {/* Flex container for plant cards */}
          <div className="plant-cards-container">
            {/* Display list of plants */}
            {plants.map((plant, index) => (
              <div className="plant-card" key={index} onClick={() => handlePlantClick(plant)}>
                <IonCard>
                  <IonImg className="plant-image" src={plant.image} alt={plant.name} />
                  <IonCardHeader>
                    <IonRow className="plant-name">{plant.name}</IonRow>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonRow className="plant-quantity">Quantity: {plant.quantity}</IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            ))}
          </div>
        </IonGrid>
      </IonContent>

      {/* Modal for displaying plant details */}
      <IonModal isOpen={showPlantDetailsModal} onDidDismiss={handleClosePlantDetailsModal}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader className="modal-header">
                  {selectedPlant && selectedPlant.name}:
                </IonCardHeader>
                <IonCardContent className="modal-content">
                  <p>{selectedPlant && selectedPlant.description}</p>
                  <br />
                  <p><strong>Care Tips:</strong> {selectedPlant && selectedPlant.careTips}</p>
                  <br />
                  <p><strong>Date Planted:</strong> {selectedPlant && selectedPlant.datePlanted}</p>
                  <br />
                  {/* Close button */}
                  <IonButton onClick={handleClosePlantDetailsModal} expand="block">Close</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonModal>

      {/* Modal for adding a new plant */}
      <IonModal isOpen={showAddModal} onDidDismiss={handleClosePlantDetailsModal}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  Add New Plant
                </IonCardHeader>
                <IonCardContent>
                  <IonInput
                    placeholder="Enter plant name"
                    value={newPlantName}
                    onIonChange={(e) => setNewPlantName(e.detail.value!)}
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="full" onClick={handleModalConfirm}>Confirm</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonModal>
    </>
  );
};

export default MyGarden;


