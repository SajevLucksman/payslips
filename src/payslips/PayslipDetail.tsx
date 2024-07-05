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
import { getPayslip, Payslip } from '../common/data/payslips';
import FileSystem from '../common/services/file-transfer';
import Constants from '../common/constants/Constant';
import PayslipCard from './shared/PaySlipsCard';
import PayslipBreakdown from './shared/PayslipBreakdown';

const PayslipDetail: React.FC = () => {
  const [payslip, setPayslip] = useState<Payslip>();
  const params = useParams<{ id: string }>();
  const [present, dismiss] = useIonLoading();
  const [presentToast] = useIonToast();

  useIonViewWillEnter(() => {
    const payslip = getPayslip(parseInt(params.id, 10));
    setPayslip(payslip);
  });

  const handleDownload = async (url: string, fileName: string) => {
    await present({message: 'Downloading...'});
    try {
      await FileSystem.downloadFile(url, fileName);
      showToast('File downloaded successfully!', 'primary');
    } catch (error) {
      console.error('Download failed', error);
      showToast('Download failed. Please try again.', 'danger');
    } finally {
      dismiss();
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
          <IonTitle>Payslip Detail</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="Payslip List" defaultHref="/payslips"/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {payslip ? (
          <>
            <PayslipCard payslip={payslip}/>
            <PayslipBreakdown/>
            <IonButton expand="full" onClick={() => handleDownload(payslip.file, payslip.id.toString())}>
              Download Payslip
            </IonButton>
          </>
        ) : (
          <div>Payslip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PayslipDetail;