import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

class FileSystem {
  async downloadFile(url: string, fileName: string): Promise<void> {
    try {
      // Fetch the image as a blob
      const response = await fetch(url);
      const blob = await response.blob();
      const fileExtension = url.split('.').pop();
      fileName = fileName + '.' + fileExtension;

      // Convert the blob to a base64 string
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result as string;

        // Write the file to the filesystem
        const writeResult = await Filesystem.writeFile({
          path: fileName,
          data: base64data.split(',')[1],
          directory: Directory.Documents
        });
        console.log('File saved at:', writeResult.uri);
        return writeResult.uri;
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error('Error downloading the file', error);
      throw error;
    }
  }
}

export default new FileSystem();