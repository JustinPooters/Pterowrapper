async function adminGetServers(url, apikey) {
  const axios = require("axios");
  const response = await axios.get(`https://${url}/api/application/servers`, {
    headers: {
      'Authorization': `Bearer ${apikey}`,
      'Accept': 'application/json',
      'Content-Type': "application/json"
    }
  }).catch(error => { return error; })
  return response.data.data;
};

module.exports = {
  adminGetServers
}