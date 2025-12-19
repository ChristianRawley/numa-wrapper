# numa-wrapper
A simple API wrapper for aggregating campus resources.

## Installation
You can install the package with npm:
```bash
$ npm install numa-wrapper
```

## Usage
Here's a simple example of how you can use numa-wrapper to get recent news and upcoming events:
```js
const uafs = require('numa-wrapper');

// Fetch page 1 news images
(async () => {
    const news = await uafs.getNews({ page: 1 });
    for (n of news) {
        console.log(n.image);
    }
})();

// Fetch the next 50 upcoming event titles
(async () => {
    const news = await uafs.getEvents();
    for (n of news) {
        console.log(n.title);
    }
})();
```

## API

### `getNews({ page })`
Fetches a list of news for a given page. Defaults to page 1.

**Parameters**:
- `page` (optional): The page number of news to retrieve. Defaults to `1` if not provided.

**Returns**: 
- An array of news objects, where each object contains information about a news item (e.g., title, image, description, title).

### `getEvents()`
Fetches a list of events.

**Returns**: 
- An array of events objects, each containing details of an event (e.g., name, date, description).

### `getOrganizations()`
Fetches a list of organizations.

**Returns**: 
- An array of organization objects, each containing details of an organization (e.g., name, description, member count, categories, image).

### `getCalendar()`
Fetches a list of months and their events per day.

**Returns**: 
- An array of month objects, each containing details of a month's events (e.g., day, description).

### `getDining()`
Fetches a list of dining locations and dining hall meals.

**Returns**: 
- An array of location objects, each containing details of a location (e.g., name, statusMessage, building, meals).