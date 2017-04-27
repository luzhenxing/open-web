define(['scripts/ajax'], ajax => {
  const urls = {
    category1: 'http://192.168.1.175:8080/api/v1/first-categorys',
    category2: 'json/category-2.json'
  };

  return {
    getCate1() {
      return ajax.getData(urls.category1);
    },
    getCate2(key) {
      return ajax.getData(urls.category2, {key});
    }
  }
});
