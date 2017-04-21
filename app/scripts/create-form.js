define(() => {
  let valid = true,
    $text1Wrapper = $('#text1-wrapper'),
    $text2Wrapper = $('#text2-wrapper'),
    $radioGroup4Wrapper = $('#radio-group4-wrapper'),
    $form = $('#create-form'),

    $text1 = $('#text1'),
    $text2 = $('#text2'),
    $radio5 = $('#radio5'),
    $radio6 = $('#radio6')

  $radio5.on('click', function () {
    $radioGroup4Wrapper.removeClass('layer')
  })
  $radio6.on('click', function () {
    $radioGroup4Wrapper.addClass('layer')
  })

  const checkName = () => {
    $text1Wrapper.removeClass('has-error')
    if ($text1.val().trim() === '') {
      $text1Wrapper.addClass('has-error')
      valid = false
    }
  }

  const checkDesc = () => {
    $text2Wrapper.removeClass('has-error')
    if ($text2.val().trim() === '') {
      $text2Wrapper.addClass('has-error')
      $('#text2-error-txt').text('请填写简介')
      valid = false
    } else if (strlen($text2.val().trim()) > 200) {
      $text2Wrapper.addClass('has-error')
      $('#text2-error-txt').text('简介范围在100个汉字或200个字符内')
      valid = false
    }
  }

  const strlen = (str) => {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 255) {
        len += 2
      } else {
        len++
      }
    }
    return len
  }

  const getFormData = () => {
    let promise = $.Deferred();
    valid = true
    checkName()
    checkDesc()
    if (valid) {
      promise.resolve($form.serialize());
    }
    return promise;
  }

  return {
    getFormData
  }
})
