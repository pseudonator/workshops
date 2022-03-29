const helpers = require('./tests/chai-http');

describe("Access should be rate limited", () => {
  const headers = [{ key: "x-type", value: "a" }, { key: "x-number", value: "one" }];
  it('Waiting for error code 429 in cluster1', () => helpers.checkURL({ host: 'https://' + process.env.ENDPOINT_HTTPS_GW_CLUSTER1, path: '/productpage', headers: headers, retCode: 429 }));
})
