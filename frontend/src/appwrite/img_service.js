import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class ImageService {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.bucket = new Storage(this.client);
  }

  async uploadImage(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("ImageService :: uploadImage :: error", error);
      return false;
    }
  }

  async getImage(fileId) {
    try {
      return await this.bucket.getFile(fileId);
    } catch (error) {
      console.log("ImageService :: getImage :: error", error);
      return false;
    }
  }

  getImagePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const imageService = new ImageService();

export default imageService;
