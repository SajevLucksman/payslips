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
import { EmployeeData } from '../../common/data/EmployeeData';

const PayslipBreakdown: React.FC<PayslipBreakdownProps> = ({payslip}) => {
  const {t} = useTranslation();
  const employee = EmployeeData.getEmployeeData();

  return (
    <IonCard color="medium">
      <IonCardHeader>
        <IonCardTitle>{t('PAYSLIP.PAYSLIP_BREAKDOWN_CARD_TITLE')}</IonCardTitle>
        <IonCardSubtitle>{t('PAYSLIP.PAYSLIP_BREAKDOWN_CARD_SUBTITLE', {id: payslip.id})}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <h5>{t('PAYSLIP.PAYSLIP_BREAKDOWN_PERIOD', {fromDate: payslip.fromDate, toDate: payslip.toDate})}</h5>
        <h6>{t('PAYSLIP.PAYSLIP_BREAKDOWN_BASIC_SALARY', {basicSalary: employee.basicSalary})}</h6>
        <p>{t('PAYSLIP.PAYSLIP_BREAKDOWN_ALLOWANCES')}</p>
        <ul>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_HOUSING_ALLOWANCE', {housingAllowance: employee.housingAllowance})}</li>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_TRANSPORT_ALLOWANCE', {transportAllowance: employee.transportAllowance})}</li>
        </ul>
        <p>{t('PAYSLIP.PAYSLIP_BREAKDOWN_DEDUCTIONS')}</p>
        <ul>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_TAX', {tax: employee.tax})}</li>
          <li>{t('PAYSLIP.PAYSLIP_BREAKDOWN_INSURANCE', {insurance: employee.insurance})}</li>
        </ul>
        <p>{t('PAYSLIP.PAYSLIP_BREAKDOWN_NET_SALARY', {netSalary: employee.netSalary})}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default PayslipBreakdown;