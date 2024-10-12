import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonMenu, IonIcon } from '@ionic/react';
import { menuController } from '@ionic/core';
import './Home.css';

const navigateTo = (url: string) => {
  menuController.close();
  window.location.href = url;
};

const Home: React.FC = () => {
  const [logs, setLogs] = useState<string>('');

  const logMessage = (message: string) => {
    console.log(message);
    setLogs(prevLogs => prevLogs + message + '\n');
  };

  const clearLogs = () => {
    setLogs('');
  };

  return (
    <IonPage>
      
      <IonMenu side="start" contentId="main-content">
        
        <IonContent className="ion-content">
          <IonList>
            <IonItem onClick={() => navigateTo('/my-garden')}>
              <IonIcon slot="start" />
              <IonLabel>My Garden</IonLabel>
            </IonItem>
            <IonItem onClick={() => navigateTo('/plant-care')}>
              <IonIcon slot="start" />
              <IonLabel>Plant Care</IonLabel>
            </IonItem>
            <IonItem onClick={() => navigateTo('/Seasonal Planting Guides')}>
              <IonIcon slot="start" />
              <IonLabel>Seasonal Planting Guides</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonHeader>
        <IonToolbar >
          <IonTitle style={{ backgroundColor: 'black' }}>Gardener's Companion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="home-container">
          <div className="logo-welcome">
            <h1>Welcome to Gardener's Companion!</h1>
            <p>A garden is a planned space, usually outdoors, set aside for the cultivation, display, and enjoyment of plants and other forms of nature. </p>
            
            <p>The single feature identifying even the wildest wild garden is control. The garden can incorporate both natural and artificial materials.</p>
          </div>

          <div className="cta-buttons">
            <IonButton className="custom-button" expand="full"  routerLink="/my-garden">My Garden</IonButton>
            <IonButton className="custom-button" expand="full"  routerLink="/plant-care">Plant Care</IonButton>
            <IonButton className="custom-button" expand="full" routerLink="/Seasonal-Planting">Seasonal Planting Guides</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
