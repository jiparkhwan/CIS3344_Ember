import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class RentalsComponent extends Component {
  @tracked query = '';

  /*types = ['Apartment', 'House', 'Room']
  query = '';

  @action chooseType(type){
    this.set('query', type);
  }*/

  /*<label>
    <span>Select Type of Rental</span>
    <PowerSelect @selected={{this.query}} @options={{this.types}} @onChange={{this.chooseType}} as |name|>
      {{name}}
    </PowerSelect>
  </label>*/
}