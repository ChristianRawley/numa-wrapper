const uafs = require('../index.js');

(async () => {
    try {
        const calendar = await uafs.getCalendar();
        console.log(calendar[0].events[0].description);

        const news = await uafs.getNews({ page: 16 });
        console.log(news[0].title);

        const events = await uafs.getEvents();
        console.log(events[0].eventName);

        const organizations = await uafs.getOrganizations();
        console.log(organizations[0].name);

        const dine = await uafs.getDining();
        console.log(dine.locations[0].statusMessage);
    } catch (err) {
        console.error('Test failed:', err);
    }
})();
