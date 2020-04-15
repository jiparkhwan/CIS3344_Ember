import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query, dropdown } = this.args;

   if(query){
      rentals = rentals.filter(rental => rental.city.includes(query))
    }
    /*else if (dropdown) {
      rentals = rentals.filter(rental => rental.category.includes(dropdown));
    }*/

    return rentals;
  }
}