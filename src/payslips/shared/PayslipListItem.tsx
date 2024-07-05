import React from 'react';
import {
  IonItem,
  IonLabel,
  IonText,
  IonChip,
} from '@ionic/react';
import './PayslipListItem.css';
import { PayslipListItemProps } from '../../common/interfaces/PayslipListItemProps';
import { useTranslation } from 'react-i18next';
import CalendarService from '../../common/services/CalendarService'; // Adjust path as needed

const PayslipListItem: React.FC<PayslipListItemProps> = ({payslip}) => {
  const {t} = useTranslation();

  return (
    <IonItem routerLink={`/detail/${payslip.id}`} detail={true} className="custom-ion-item">
      <div className="divider"></div>
      <IonLabel>
        <IonText color="primary">
          <h2>{t('PAYSLIP.PAYSLIP_ITEM_NUMBER', {id: payslip.id})}</h2>
        </IonText>
        <IonText color="medium">
          <h3>{t('PAYSLIP.PAYSLIP_ITEM_PAY_PERIOD', {fromDate: payslip.fromDate, toDate: payslip.toDate})}</h3>
        </IonText>
      </IonLabel>
      <IonChip color="danger">{CalendarService.getMonthName(payslip.fromDate)}</IonChip>
    </IonItem>
  );
};

export default PayslipListItem;