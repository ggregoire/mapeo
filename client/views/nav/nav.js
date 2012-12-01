Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_photos']
  }
});

$('input').on('focus', function (e) {
  e.stopPropagation();
})