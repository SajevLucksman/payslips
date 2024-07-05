import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { PayslipCardProps } from '../../common/interfaces/PayslipCardProps';

const PayslipCard: React.FC<PayslipCardProps> = ({payslip}) => {
  const {t} = useTranslation(); // Initialize useTranslation hook

  return (
    <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle>{t('PAYSLIP.PAYSLIP_DETAIL_CARD_TITLE', {name: 'L SAJEV'})}</IonCardTitle>
        <IonCardSubtitle>{t('PAYSLIP.PAYSLIP_SUMMARY_CARD_SUB_HEADING')}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardSubtitle>{t('PAYSLIP.EMPLOYER_ID', {employerID: 'LUCK89067'})}</IonCardSubtitle>
        <h6>{t('PAYSLIP.PAYSLIP_DETAIL_CARD_SALARY', {salary: '$70,000'})}</h6>
      </IonCardContent>
    </IonCard>
  );
};

export default PayslipCard;