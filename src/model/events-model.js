import { type, getRandomInteger } from '../utils';
import { generateDate } from '../event-date';
import { generateTripEvent } from '../mock/event';

export default class TripEventsModel{
  constructor(eventsCount, offersCount, destinations) {
    this.tripEvents = Array.from({length: eventsCount},
      (tripEvent, id) =>
        generateTripEvent(id, type[getRandomInteger(0, type.length - 1)], offersCount, destinations[id], generateDate()));
  }

  getTripEvents() {
    return this.tripEvents;
  }
}