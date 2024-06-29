import React from 'react';
import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  useIonViewWillEnter
} from '@ionic/react';
import { getPayslips, Payslip } from '../common/data/payslips';
import PayslipListItem from './shared/PayslipListItem';


const PayslipsList: React.FC = () => {

  const [payslips, setPayslips] = useState<Payslip[]>([]);

  useIonViewWillEnter(() => {
    const payslips: Payslip[] = getPayslips();
    setPayslips(payslips);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color ="primary">
          <IonCardHeader>
            <IonCardTitle>Hi Sajev!</IonCardTitle>
            <IonCardSubtitle>Review Your Earnings and Payment History</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>#Employer: LUCK89067</IonCardSubtitle>
            <h6>Access and download your pay slips conveniently. Review your earnings and payment history with ease.</h6></IonCardContent>
        </IonCard>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          {payslips.map(payslip => <PayslipListItem key={payslip.id} payslip={payslip}/>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PayslipsList;