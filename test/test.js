const uafs = require('../index.js');

(async () => {
    try {
        const news = await uafs.getNews({ page: 1 });
        if (news.length > 0) console.log('getNews() returned a nonempty array.');
        const events = await uafs.getEvents();
        if (events.length > 0) console.log('getEvents() returned a nonempty array.');
    } catch (error) {
        console.error('Not all test cases were passed. Error:', error);
    }
})();