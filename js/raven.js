var dsn = document.querySelector('script[data-sentry-dsn]')
  .getAttribute('data-sentry-dsn');
var id = document.querySelector('script[data-sentry-id]')
  .getAttribute('data-sentry-id');
if (dsn.length > 0 && id.length > 0)
  Raven.config('https://' + dsn + '@sentry.eff.org/' + id).install();
