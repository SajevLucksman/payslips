import React from 'react';
import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import { getPayslip, Payslip } from '../common/data/payslips';

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

            <div>
              <h1>{payslip.file}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </>
        ) : (
          <div>Payslip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPayslip;