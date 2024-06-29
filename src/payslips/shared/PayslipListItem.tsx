import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote,
  IonText,
} from '@ionic/react';
import { Payslip } from '../../common/data/payslips';
import './PayslipListItem.css';

interface PayslipListItemProps {
  payslip: Payslip;
}

const PayslipListItem: React.FC<PayslipListItemProps> = ({payslip}) => {
  return (
    <IonItem routerLink={`/detail/${payslip.id}`} detail={true} className="custom-ion-item">
      <div className="divider"></div>
      <IonLabel>
        <IonText color="primary">
          <h2>#Payslip: 000{payslip.id}</h2>
        </IonText>
        <IonText color="medium">
          <h3>Pay Period: <b>{payslip.fromDate} - {payslip.toDate}</b></h3>
        </IonText>
      </IonLabel>
    </IonItem>
  );
};

export default PayslipListItem;