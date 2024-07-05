import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { PayslipBreakdownProps } from '../../common/interfaces/PayslipBreakdownProps';

const PayslipBreakdown: React.FC<PayslipBreakdownProps> = ({ payslip }) => {
  const { t } = useTranslation();

  return (
    <IonCard color="medium">
      <IonCardHeader>
        <IonCardTitle>{t('PAYSLIP.PAYSLIP_BREAKDOWN_CARD_TITLE')}</IonCardTitle>
        <IonCardSubtitle>{t('PAYSLIP.PAYSLIP_BREAKDOWN_CARD_SUBTITLE', { id: payslip.id })}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <h5>{t('PAYSLIP.PAYSLIP_BREAKDOWN_PERIOD', { fromDate: payslip.fromDate, toDate: payslip.toDate })}</h5>
        <h6>{t('PAYSLIP.PAYSLIP_BREAKDOWN_BASIC_SALARY', { basicSalary: '$70,000' })}</h6>
        <p>{t('PAYSLIP.PAYSLIP_BREAKDOWN_ALLOWANCES')}</p>
        <ul>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_HOUSING_ALLOWANCE', { housingAllowance: '$10,000' })}</li>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_TRANSPORT_ALLOWANCE', { transportAllowance: '$5,000' })}</li>
        </ul>
        <p>{t('PAYSLIP.PAYSLIP_BREAKDOWN_DEDUCTIONS')}</p>
        <ul>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_TAX', { tax: '$10,000' })}</li>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_INSURANCE', { insurance: '$5,000' })}</li>
        </ul>
        <p>{t('PAYSLIP.PAYSLIP_BREAKDOWN_NET_SALARY', { netSalary: '$60,000' })}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default PayslipBreakdown;