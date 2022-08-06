class MsAuthConnector {
  constructor(opts) {
    Object.assign(this, opts);
  }

  verifyToken(token) {
      return new Promise((resolve, reject) => {
        const options = {
            method: "GET",
            url: this.baseUrl + '/verify/token',
            headers: {
                token
            }
        };
        this.request(options, (err, response, body) => {
         if (err) {
             return reject(err);
         }
        return resolve(body);
        });
      });
  }
}

module.exports = MsAuthConnector;
