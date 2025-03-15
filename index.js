async function api(arg) {
    const response = await fetch(`https://api.cerawley.com/${arg}`);
    if (!response.ok) {
        throw new Error(`HTTP error occured. Status: ${response.status}`);
    }
    let json = await response.text();
    return JSON.parse(json);
}

async function getNews({page = 1} = {}) {
    if (typeof page !== 'number' || isNaN(page)) {
        throw new Error('Page must be a valid number.');
    }
    return await api(`getNews/${page.toString()}`);
}

async function getEvents() {
    return await api(`getEvents`);
}

module.exports = {getNews, getEvents};