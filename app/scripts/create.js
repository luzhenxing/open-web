define(['scripts/create-form', 'scripts/select-category'], (form) => {
  $('#btn-save').on('click', function () {
    form.getFormData().then(data => {
      console.log(data)
    })
  })
  $('#btn-next').on('click', function () {
    form.getFormData().then(data => {
      console.log(data)
    })
  })
})
