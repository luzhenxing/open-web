define(() => {
  return {
    getData(url, data = {}) {
      const promise = $.Deferred()
      $.getJSON(url, $.extend(data, {timer: Date.now()}), result => {
        if (result.error_code === 0){
          promise.resolve(result.data);
        } else {
          throw new Error('ajax get fail');
          promise.reject(result);
        }
      })
      return promise;
    },
    postData(url, data={}) {
      const promise = $.Deferred()
      $.post(url, data, result => {
        if (result.error_code === 0){
          promise.resolve(result.data);
        } else {
          throw new Error('ajax post fail');
          promise.reject(result);
        }
      }, 'json')
      return promise;
    }
  }
})
