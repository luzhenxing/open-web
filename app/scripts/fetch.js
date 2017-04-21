define(['scripts/ajax'], ajax => {
  const urls = {
    category1: 'json/category-1.json',
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
