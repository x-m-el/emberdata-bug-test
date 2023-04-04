import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class EffectsNewRoute extends Route {
  @service store;

  model() {
    return this.store.createRecord('effect');
  }

  @action
  async willTransition() {
    let m = this.modelFor(this.routeName);
    if (m.isNew) {
      await m.destroyRecord();
    }
  }
}
