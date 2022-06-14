export function checkCookie(cookieName: string) {
  if (!cookieName && cookieName !== undefined) return null;
  cookieName = encodeURIComponent(cookieName).replace(
    /[.*+?^=!:${}()|[\]/\\]/g,
    '\\$&'
  ); //escape regexp characters
  const rxp = new RegExp(`(?:^|;)\\s*${cookieName}=([^;]*)`);
  const theCookie = rxp.exec(document.cookie);
  return theCookie ? decodeURIComponent(theCookie[1]) : null;
}
