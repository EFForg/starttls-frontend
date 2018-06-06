console.log("loaded")
var dsn = document.querySelector('script[data-sentry-dsn]')
  .getAttribute('data-sentry-dsn');
var id = document.querySelector('script[data-sentry-id]')
  .getAttribute('data-sentry-id');
Raven.config('https://' + dsn + '@sentry.eff.org/' + id).install()
