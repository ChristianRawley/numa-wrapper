async function api(arg) {
    const response = await fetch(`https://api.cerawley.com/${arg}`);
    if (!response.ok) throw new Error(`HTTP error occurred. Status: ${response.status}`);
    const text = await response.text();
    return JSON.parse(text);
}

async function getNews({ page = 1 } = {}) {
    if (typeof page !== 'number' || isNaN(page)) throw new Error('Page must be a valid number.');
    const data = await api(`news?page=${page.toString()}`);
    return data.news;
}

async function getEvents() {
    return await api('events');
}

async function getOrganizations() {
    return await api('organizations');
}

async function getCalendar() {
    return await api('calendar');
}

async function getDining() {
    return await api('dining');
}

module.exports = {
    getNews,
    getEvents,
    getOrganizations,
    getCalendar,
    getDining
};
