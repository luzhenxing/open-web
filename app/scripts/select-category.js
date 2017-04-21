define(['scripts/ajax'], (ajax) => {
  const $cate1 = $('#category1'),
    $cate2 = $('#category2'),
    url1 = 'json/category-1.json',
    url2 = 'json/category-2.json';

  const renderCategory = ($cate, url, data) => {
    return ajax.getData(url, data).then(data => {
      $cate.html(template('tpl-select-option', data));
    });
  }

  $cate1.on('change', function() {
    var key = this.value;
    renderCategory($cate2, url2, {key});
  });

  renderCategory($cate1, url1, {}).then(()=>{
    renderCategory($cate2, url2, {key: $cate1.val()});
  });

});
