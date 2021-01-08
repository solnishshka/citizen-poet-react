class Api {
    constructor(url) {
      this._url = url;
    }
  
    getQuotes() {
      return fetch(`${this._url}`).then((result) => {
        if (result.ok) {
          return result.json();
        } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
      });
    }
    }
  
  export default Api;
  