// Allow PUT and DELETE submits from URLs
util.genericFormSubmit = function (url, method) {
  var form = $(document.createElement('form'));
  var csrfToken = $('meta[name="csrf-token"]').prop('content')
  form.append($('<input type="hidden" name="_method" value="'+ method + '" />'))
  form.append($('<input type="hidden" name="authenticity_token" value="'+ csrfToken + '" />'))
  $(document.body).append(form);

  form.attr('action', url);
  form.attr('method', 'post');
  form.submit();

  form.remove();
}
