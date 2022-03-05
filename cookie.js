const getCookie = (name) => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookies = allCookie.find(singleCookie => singleCookie.includes(name));
    if (findCookies) {
        const cookieNameValue = findCookies.split('=');
        return cookieNameValue[1];
    }
}