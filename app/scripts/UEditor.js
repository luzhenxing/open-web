define(() => {
  return {
    editorCache: {},
    // 创建编辑器
    renderUEditor(dom, height, content){
      let id = dom.id;
      if (! this.editorCache.hasOwnProperty(id)) {
        this.createUEditor(dom, height, content);
      } else {
        this.editorCache[id].setHeight(height);
        this.editorCache[id].setShow();
        this.editorCache[id].setContent(content);
      }
    },
    createUEditor(id, height, content){
      this.editorCache[id] = UE.getEditor(id, {
        initialContent: content,
        initialFrameHeight: height
      })
    }
  }
});
