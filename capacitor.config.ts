import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dee.payslips.system',
  appName: 'Payslips',
  webDir: 'build',
  ios: {
    scheme: 'Payslips'
  }
};

export default config;
