import { useIonToast } from '@ionic/react';
import Constants from '../constants/Constant';

class ToastService {
  private presentToast: any; // Adjust the type as per useIonToast return type or implementation

  constructor() {
    // Initialize or get the presentToast function from useIonToast hook
    [this.presentToast] = useIonToast();
  }

  showToast = async (message: string, color: 'primary' | 'danger') => {
    await this.presentToast({
      message,
      duration: Constants.TOAST.TOAST_DURATION,
      position: Constants.TOAST.TOAST_POSITION_BOTTOM,
      color,
    });
  };
}

export default ToastService;