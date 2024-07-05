import { useIonToast } from '@ionic/react';
import Constants from '../constants/Constant';

class ToastService {
  private presentToast = useIonToast()[0];

  async showToast(message: string, color: 'primary' | 'danger') {
    await this.presentToast({
      message,
      duration: Constants.TOAST.TOAST_DURATION,
      position: Constants.TOAST.TOAST_POSITION_BOTTOM,
      color,
    });
  }
}

export default new ToastService();
