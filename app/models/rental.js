import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = [
  'Room',
  'Apartment'
];

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr state;
  @attr country;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr bathrooms;
  @attr kitchen;
  @attr wifi;
  @attr price;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'House';
    }
  }
}