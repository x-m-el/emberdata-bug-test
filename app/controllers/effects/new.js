import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class EffectsNewController extends Controller {
  @service router;

  @action
  async saveEffect() {
    this.router.transitionTo('effects');
  }
}
