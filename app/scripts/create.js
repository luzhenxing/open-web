define(['scripts/create-form', 'scripts/editor/ItemEditor', 'scripts/select-category'], (form, ItemEditor) => {
  let itemEditor = new ItemEditor()
  $('#btn-save').on('click', function () {
    form.getFormData().then(data => {
      console.log(data)
    })
  })

  $('#btn-next').on('click', function() {
    form.getFormData().then(data => {
      console.log(data)
      itemEditor.show()
    })
  })

  // itemEditor.show()
})
