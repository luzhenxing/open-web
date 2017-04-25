define(['scripts/UEditor'], (UEditor) => {
  const UEDITOR_MIN_HEIGHT = 100;

  function ItemUeditor() {
    this.$layer = null
  }

  ItemUeditor.prototype = {
    getLayer(){
      if (!this.$layer) {
        let tpl = template('tpl-item-ueditor-layer', {})
        this.$layer = $(tpl)
        $('body').append(this.$layer)

        this.bindEvent()
      }
    },
    bindEvent(){
      // 取消
      this.$layer.on('click', '#ueditor-btn-cancel', () => {
        this.hide()
      })
        .on('change', '.hook-item-checkbox', function () {
          let $label = $(this).closest('label.checkbox')
          if (this.checked) {
            $label.addClass('checked')
          } else {
            $label.removeClass('checked')
          }
        })
    },
    show(){
      this.getLayer()

      this.$layer.show().addClass('fadeIn')
    },
    hide(){
      this.$layer.hide()
    },
    createItem(){
      let $li = $(this.getItemListTpl())
      this.$layer.find('.loading-wrap').remove().end()
        .find('.item-list').append($li)
      this.renderUEditor($li);
    },
    getItemListTpl(){
      return template('tpl-item-list',
        {id: Date.now(), type: 'edit'})
    },
    renderUEditor($li){
      let height = Math.max($li.height(), UEDITOR_MIN_HEIGHT);
      let ueditorDom = $li.find('.item-ueditor').get(0);
      let content = '';
      if ($li.data('type') == 'edit'){
        content = $li.find('.item-inner').html();
      }
      UEditor.renderUEditor(ueditorDom, height, content);
      $li.find('.item-inner').hide();
    }
  }

  const itemUeditor = new ItemUeditor()

  return {
    setOptions(ops = {}){
      $.extend(itemUeditor, ops)
    },
    show(command = 'create'){
      itemUeditor.show()
      switch (command) {
        case 'create':
          itemUeditor.createItem()
          break
      }
    },
    hide(){
      itemUeditor.hide()
    }
  }
})
