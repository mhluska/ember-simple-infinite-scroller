/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const app = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  customEvents: {
    touchstart: null,
    touchmove: null,
    touchend: null,
    touchcancel: null
  }
});

loadInitializers(app, config.modulePrefix);

export default app;
