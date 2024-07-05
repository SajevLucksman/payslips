import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import { PayslipBreakdownProps } from '../../common/interfaces/PayslipBreakdownProps';

const PayslipBreakdown: React.FC<PayslipBreakdownProps> = ({payslip}) => (
  <IonCard color="medium">
    <IonCardHeader>
      <IonCardTitle>Salary Breakdown</IonCardTitle>
      <IonCardSubtitle>#Payslip 000{payslip.id}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <h5>Payslip period: {payslip.fromDate} to {payslip.toDate}</h5>
      <h6>Basic Salary: $70,000</h6>
      <p>Allowances:</p>
      <ul>
        <li>Housing Allowance: $10,000</li>
        <li>Transportation Allowance: $5,000</li>
      </ul>
      <p>Deductions:</p>
      <ul>
        <li>Tax: $10,000</li>
        <li>Insurance: $5,000</li>
      </ul>
      <p>Net Salary: $60,000</p>
    </IonCardContent>
  </IonCard>
);

export default PayslipBreakdown;
