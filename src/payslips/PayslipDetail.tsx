import React from 'react';
import { useState } from 'react';
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
  useIonViewWillEnter, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonTitle,
} from '@ionic/react';
import { useParams } from 'react-router';
import { getPayslip, Payslip } from '../common/data/payslips';
import FileSystem from '../common/services/file-system';

function PayslipDetail() {
  const [payslip, setPayslip] = useState<Payslip>();
  const params = useParams<{ id: string }>();
  const [present, dismiss] = useIonLoading();
  const [presentToast] = useIonToast();

  useIonViewWillEnter(() => {
    const payslip = getPayslip(parseInt(params.id, 15));
    setPayslip(payslip);
  });

  const handleDownload = async (url: string, fileName: string) => {
    await present({
      message: 'Downloading...'
    });
    FileSystem.downloadFile(url, fileName).then(result => {
      console.log('Downloaded Successfully')
    }).catch(error => {
      console.log('Download failed.');
    }).finally(() => {
      dismiss();
      showToast();
    });
  };

  const showToast = async () => {
    await presentToast({
      message: 'File downloaded successfully!',
      duration: 1500,
      position: 'bottom',
      color: 'primary'
    });
  };

  return (
    <IonPage id="view-payslip">
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Payslip Detail</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="Payslip List" defaultHref="/payslips"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {payslip ? (
          <>
            <IonCard color ="primary">
              <IonCardHeader>
                <IonCardTitle>Name : L SAJEV</IonCardTitle>
                <IonCardSubtitle>Payslip for {payslip.fromDate} - {payslip.toDate}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardSubtitle>#Employer: LUCK89067</IonCardSubtitle>
                <h6> Your basic salary: 70000$</h6></IonCardContent>
            </IonCard>
            <IonCard color="medium">
              <IonCardHeader>
                <IonCardTitle>Salary Breakdown</IonCardTitle>
                <IonCardSubtitle>#Payslip 000{payslip.id}</IonCardSubtitle>

              </IonCardHeader>
              <IonCardContent>
                <h5>Payslip period : {payslip.fromDate} to {payslip.toDate}</h5>
                <h6>Basic Salary: 70000$</h6>
                <p>Allowances:</p>
                <ul>
                  <li>Housing Allowance: 10000$</li>
                  <li>Transportation Allowance: 5000$</li>
                </ul>
                <p>Deductions:</p>
                <ul>
                  <li>Tax: 10000$</li>
                  <li>Insurance: 5000$</li>
                </ul>
                <p>Net Salary: 60000$</p>
              </IonCardContent>
            </IonCard>
            <IonButton expand="full" onClick={() => handleDownload(payslip.file, payslip.id.toString())}>Download
              Payslip</IonButton>
          </>
        ) : (
          <div>Payslip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default PayslipDetail;