module.exports = {
  devServer: {
    proxy: {
      "/shuttleapi": {
        target: "http://localhost:8000"
      }
    }
  }
};
