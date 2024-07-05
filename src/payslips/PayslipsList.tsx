import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  useIonViewWillEnter
} from '@ionic/react';
import { getPayslips } from '../common/data/payslips';
import { Payslip } from '../common/interfaces/Payslip';
import PayslipListItem from './shared/PayslipListItem';
import { useTranslation } from 'react-i18next';

const PayslipsList: React.FC = () => {
  const [payslips, setPayslips] = useState<Payslip[]>([]);
  const {t} = useTranslation();
  const name = 'Sajev';
  const employerID = 'LUCK89067';
  // Use useIonViewWillEnter to fetch data when the view is about to enter
  useIonViewWillEnter(() => {
    const fetchedPayslips = getPayslips();
    setPayslips(fetchedPayslips);
  });

  // Use useEffect to handle initialization and updates
  useEffect(() => {
    const fetchedPayslips = getPayslips();
    setPayslips(fetchedPayslips);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('PAYSLIP.PAYSLIPS')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>{t('COMMON.WELCOME_MESSAGE', {name})}</IonCardTitle>
            <IonCardSubtitle>{t('PAYSLIP.PAYSLIP_SUMMARY_CARD_SUB_HEADING')}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>{t('PAYSLIP.EMPLOYER_ID', {employerID})}</IonCardSubtitle>
            <h6>{t('PAYSLIP.PAYSLIP_SUMMARY_CARD_DESCRIPTION')}</h6>
          </IonCardContent>
        </IonCard>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          {payslips.map(payslip => (
            <PayslipListItem key={payslip.id} payslip={payslip}/>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PayslipsList;