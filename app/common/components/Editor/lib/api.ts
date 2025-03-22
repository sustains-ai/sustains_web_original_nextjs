import FormData from "form-data"
import { uploadBlogImage } from "../../Blog/redux/api";

export class API {
  public static uploadImage = async (_file: File) => {
    const data = new FormData();
    data.append('image', _file);

    const response = await uploadBlogImage(data)
    return response?.file?.url
  }
}

export default API
