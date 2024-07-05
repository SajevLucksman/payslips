import FileSystem from './file-system';
import Log from './log';

class FileTransfer {
  async downloadFile(url: string, fileName: string): Promise<string> {
    try {
      const blob = await this.fetchBlob(url);
      const fileExtension = this.getFileExtension(url);
      const fullFileName = `${fileName}.${fileExtension}`;
      const base64data = await this.convertBlobToBase64(blob);
      const fileUri = await FileSystem.writeFile(fullFileName, base64data.split(',')[1]);
      Log.log('File saved at:'+ fileUri);
      return fileUri;
    } catch (error) {
      Log.log('Error downloading the file'+ error);
      throw error;
    }
  }

  private async fetchBlob(url: string): Promise<Blob> {
    const response = await fetch(url);
    return response.blob();
  }

  private getFileExtension(url: string): string {
    return url.split('.').pop() || '';
  }

  private convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}

export default new FileTransfer();
