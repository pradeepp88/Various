import axios from 'axios';
import store from '@/store';

export default class HttpService {



  public fetchAsync = async (url: string) => {
    try {
      var fetchUrl = store.state.apiURL + url;
      console.log(`Http Service - fetch called on ${fetchUrl}`);
      return await axios.get(fetchUrl);
    }
    catch (error) {
      console.error(error);
    }
  }

  public post(url: string, data: any)  {
      var postUrl = store.state.apiURL + url;
      console.log(`Http Service - post called on ${postUrl}`);
      var src = axios.post(postUrl, data)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      })
      return src;
    }


  public postAsync = async (url: string, data: any) => {
    try {
      var postUrl = store.state.apiURL + url;
      console.log(`Http Service - post called on ${postUrl}`);
      let res = await axios.post(postUrl, data);
      return res.data;
    }
    catch (error) {
      console.error(error);
    }
  }
}
