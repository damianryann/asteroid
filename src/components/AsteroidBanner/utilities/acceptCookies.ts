export function acceptCookies(
  functional: boolean,
  analytics: boolean,
  siteName: string | undefined,
  setVisible: Function
) {
  const expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 12);

  const cookieName = `${siteName}Cookie` ?? 'AsteroidCookie';

  const cookieValue = {
    functional: functional,
    essentials: true,
    analytics: analytics,
    accepted: new Date().toUTCString(),
    rejected: null,
    expires: expiryDate.toUTCString()
  };

  document.cookie = `${cookieName.replace(
    /\s/g,
    ''
  )}=${JSON.stringify(
    cookieValue
  )};expires=${expiryDate.toUTCString()};path=/`;
  setVisible(false);
}

export function rejectCookies(
  siteName: string | undefined,
  setVisible: Function
) {
  const expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 1);

  const cookieName = `${siteName}Cookie` ?? 'AsteroidCookie';

  const cookieValue = {
    functional: false,
    essentials: true,
    analytics: false,
    accepted: null,
    rejected: new Date().toUTCString(),
    expires: expiryDate.toUTCString()
  };

  document.cookie = `${cookieName.replace(
    /\s/g,
    ''
  )}=${JSON.stringify(
    cookieValue
  )};expires=${expiryDate.toUTCString()};path=/`;
  setVisible(false);
}
