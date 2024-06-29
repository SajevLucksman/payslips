import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/react';
import { Payslip } from '../../common/data/payslips';

interface PayslipListItemProps {
  payslip: Payslip;
}

const PayslipListItem: React.FC<PayslipListItemProps> = ({payslip}) => {
  return (
    <IonItem routerLink={`/detail/${payslip.id}`} detail={true}>
      <IonLabel>
        <h2>
          From Date :
          <span>
            <IonNote>{payslip.fromDate}</IonNote>
          </span>
        </h2>
        <h2>
          To Date :
          <span>
            <IonNote>{payslip.toDate}</IonNote>
          </span>
        </h2>
        <h2>
          File :
          <span>
            <IonNote>{payslip.file}</IonNote>
          </span>
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default PayslipListItem;