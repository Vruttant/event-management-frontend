export default class Event {
  constructor(id, title, description, image, location, date, time, reviews) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.location = location;
    this.date = date;
    this.time = time;
    this.reviews = reviews;
  }
}
