import React from 'react';
import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  IonButton,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import { getPayslip, Payslip } from '../common/data/payslips';
import FileSystem from '../common/services/file-system';

const handleDownload = (url : string, fileName: string) => {
  FileSystem.downloadFile(url, fileName).then(result => {
    console.log("Downloaded Successfully")
  });
};
function ViewPayslip() {
  const [payslip, setPayslip] = useState<Payslip>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const payslip = getPayslip(parseInt(params.id, 15));
    setPayslip(payslip);
  });

  return (
    <IonPage id="view-payslip">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Payslip List" defaultHref="/payslips"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {payslip ? (
          <>
            <IonItem>
              <IonLabel>
                <h2>
                  Payslip ID :
                  <span>
                    <IonNote>000{payslip.id}</IonNote>
                  </span>
                </h2>
                <h2>
                  Date From :
                  <span>
                    <IonNote>{payslip.toDate}</IonNote>
                  </span>
                </h2>
                <h2>
                  Date To :
                  <span>
                    <IonNote>{payslip.fromDate}</IonNote>
                  </span>
                </h2>
              </IonLabel>
            </IonItem>

            <IonButton expand="full" onClick={() => handleDownload(payslip.file, payslip.id.toString())}>Download Payslip</IonButton>
          </>
        ) : (
          <div>Payslip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPayslip;