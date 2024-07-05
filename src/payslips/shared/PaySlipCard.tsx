import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { PayslipCardProps } from '../../common/interfaces/PayslipCardProps';
import { EmployeeData } from '../../common/data/EmployeeData';

const PayslipCard: React.FC<PayslipCardProps> = ({payslip}) => {
  const {t} = useTranslation();
  const employee = EmployeeData.getEmployeeData();

  return (
    <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle>{t('PAYSLIP.PAYSLIP_DETAIL_CARD_TITLE', {name: employee.name})}</IonCardTitle>
        <IonCardSubtitle>{t('PAYSLIP.PAYSLIP_SUMMARY_CARD_SUB_HEADING')}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardSubtitle>{t('PAYSLIP.EMPLOYER_ID', {employerID: employee.employerID})}</IonCardSubtitle>
        <h6>{t('PAYSLIP.PAYSLIP_DETAIL_CARD_SALARY', {salary: employee.basicSalary})}</h6>
      </IonCardContent>
    </IonCard>
  );
};

export default PayslipCard;