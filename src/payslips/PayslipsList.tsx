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