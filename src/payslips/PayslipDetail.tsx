import React, { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  useIonLoading,
  useIonToast,
  useIonViewWillEnter,
  IonTitle,
} from '@ionic/react';
import { useParams } from 'react-router';
import { getPayslip } from '../common/data/payslips';
import { Payslip } from '../common/interfaces/Payslip';
import FileTransferService from '../common/services/FileTransferService';
import Constants from '../common/constants/Constant';
import PayslipCard from './shared/PaySlipCard';
import PayslipBreakdown from './shared/PayslipBreakdown';
import LogService from '../common/services/LogService';
import { useTranslation } from 'react-i18next';

const PayslipDetail: React.FC = () => {
  const [payslip, setPayslip] = useState<Payslip>();
  const {t} = useTranslation();
  const params = useParams<{ id: string }>();
  const [present, dismiss] = useIonLoading();
  const [presentToast] = useIonToast();

  useIonViewWillEnter(() => {
    const payslip = getPayslip(parseInt(params.id, 10));
    setPayslip(payslip);
  });

  const handleDownload = async (url: string, fileName: string) => {
    await present({message: t('COMMON.DOWNLOADING_MESSAGE')});

    try {
      await FileTransferService.downloadFile(url, fileName);
      await showToast(t('COMMON.FILE_DOWNLOAD_SUCCESS'), Constants.COLORS.PRIMARY);
    } catch (error) {
      LogService.error('Download failed.', error);
      await showToast(t('COMMON.DOWNLOAD_FAILED_MESSAGE'), Constants.COLORS.DANGER);
    } finally {
      await dismiss();
    }
  };

  const showToast = async (message: string, color: 'primary' | 'danger') => {
    await presentToast({
      message,
      duration: Constants.TOAST.TOAST_DURATION,
      position: Constants.TOAST.TOAST_POSITION_BOTTOM,
      color,
    });
  };

  return (
    <IonPage id="view-payslip">
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{t('PAYSLIP.PAYSLIP_DETAIL_TITLE')}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text={t('PAYSLIP.PAYSLIPS')} defaultHref="/payslips"/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {payslip ? (
          <>
            <PayslipCard payslip={payslip}/>
            <PayslipBreakdown payslip={payslip}/>
            <IonButton expand="full" onClick={() => handleDownload(payslip.file, payslip.id.toString())}>
              {t('PAYSLIP.PAYSLIP_DETAIL_BUTTON_TEXT')}
            </IonButton>
          </>
        ) : (
          <div>{t('PAYSLIP.PAYSLIP_NOT_FOUND')}</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PayslipDetail;