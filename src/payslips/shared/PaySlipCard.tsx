import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import { PayslipCardProps } from '../../common/interfaces/PayslipCardProps';

const PayslipCard: React.FC<PayslipCardProps> = ({payslip}) => (
  <IonCard color="primary">
    <IonCardHeader>
      <IonCardTitle>Name: L SAJEV</IonCardTitle>
      <IonCardSubtitle>Payslip for {payslip.fromDate} - {payslip.toDate}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <IonCardSubtitle>#Employer: LUCK89067</IonCardSubtitle>
      <h6>Your basic salary: $70,000</h6>
    </IonCardContent>
  </IonCard>
);

export default PayslipCard;
