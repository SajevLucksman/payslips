import React from 'react';
import {
  IonItem,
  IonLabel,
  IonText,
  IonChip,
} from '@ionic/react';
import './PayslipListItem.css';
import { PayslipListItemProps } from '../../common/interfaces/PayslipListItemProps';


const PayslipListItem: React.FC<PayslipListItemProps> = ({payslip}) => {

  const getMonthName = (dateString: string): string => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Extract the month number from the date string
    const monthNumber = parseInt(dateString.split('-')[1], 10);

    // Return the month name
    return monthNames[monthNumber - 1];
  };

  return (
    <IonItem routerLink={`/detail/${payslip.id}`} detail={true} className="custom-ion-item">
      <div className="divider"></div>
      <IonLabel>
        <IonText color="primary">
          <h2>#Payslip: 000{payslip.id}</h2>
        </IonText>
        <IonText color="medium">
          <h3>Pay Period: {payslip.fromDate} - {payslip.toDate}</h3>
        </IonText>
      </IonLabel>
      <IonChip color="danger">{getMonthName(payslip.fromDate)}</IonChip>
    </IonItem>
  );
};

export default PayslipListItem;