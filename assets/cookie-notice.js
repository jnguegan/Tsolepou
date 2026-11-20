// Cookie notice: informational only. The site sets no tracking or advertising cookies,
// so no consent is needed (LSSI-CE art. 22.2). The dismissal is remembered in local storage.
(function () {
  var KEY = 'ts_cookie_notice';
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var T = {
    en: ['This website uses no tracking or advertising cookies.', 'Cookie policy', 'OK'],
    fr: ['Ce site n’utilise aucun cookie de suivi ni de publicité.', 'Politique de cookies', 'OK'],
    es: ['Este sitio web no utiliza cookies de seguimiento ni de publicidad.', 'Política de cookies', 'Aceptar']
  }[lang] || null;
  if (!T) { lang = 'en'; T = ['This website uses no tracking or advertising cookies.', 'Cookie policy', 'OK']; }
  var bar = document.createElement('div');
  bar.className = 'cookiebar';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', T[1]);
  bar.innerHTML = '<p>' + T[0] + ' <a href="/legal/' + lang + '/cookies.html">' + T[1] + '</a></p><button type="button">' + T[2] + '</button>';
  bar.querySelector('button').addEventListener('click', function () {
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
    bar.remove();
  });
  document.body.appendChild(bar);
})();
