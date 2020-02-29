const requestCaller = (req: Request): Promise<any> => {
  return fetch(req)
    .then(async resp => {
      console.log(`RR: ${JSON.stringify(resp)}`);
      if (resp.status === 200 || resp.status === 201) {
        try {
          const json = await resp.json();
          return Promise.resolve(json);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

export class RequestUtils {
  private baseUrl: string;
  private header: any;
  private headerInterceptor: Function;

  constructor(baseUrl: string, headerInterceptor?: Function) {
    this.baseUrl = baseUrl;
    this.header = {};
    if (headerInterceptor) {
      this.headerInterceptor = headerInterceptor;
    } else {
      this.headerInterceptor = (h: any) => h;
    }
  }

  makeHeader(headers: any): any {
    const header = Object.assign(this.header, headers);
    return this.headerInterceptor(header);
  }

  get = async (url: string, headers?: any) => {
    const request = new Request(`${this.baseUrl}${url}`, {
      headers: this.makeHeader(headers),
      method: 'GET',
    });
    requestCaller(request);
  };

  post = async (url: string, body: any, headers?: any) => {
    const request = new Request(`${this.baseUrl}${url}`, {
      headers: this.makeHeader(headers),
      body,
      method: 'POST',
    });
    requestCaller(request);
  };

  put = async (url: string, body: any, headers?: any) => {
    const request = new Request(`${this.baseUrl}${url}`, {
      headers: this.makeHeader(headers),
      body,
      method: 'PUT',
    });
    requestCaller(request);
  };

  patch = async (url: string, body: any, headers?: any) => {
    const request = new Request(`${this.baseUrl}${url}`, {
      headers: this.makeHeader(headers),
      body,
      method: 'PATCH',
    });
    requestCaller(request);
  };

  delete = async (url: string, body: any, headers?: any) => {
    const request = new Request(`${this.baseUrl}${url}`, {
      headers: this.makeHeader(headers),
      body,
      method: 'DELETE',
    });
    requestCaller(request);
  };
}
