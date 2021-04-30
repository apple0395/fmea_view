<script>
module.exports = {
  CallApi(url, method, parameter, callback) {
    this.axios({
      url,
      method,
      data: method.toLowerCase() === 'POST' ? parameter : null,
      params: method.toLowerCase() === 'GET' ? parameter : null,
    }).then((response) => {
      callback(response);
    });
  },
};
</script>
