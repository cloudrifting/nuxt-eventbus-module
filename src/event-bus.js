import Vue from 'vue'

const eventBus = new Vue()

export default function(ctx, inject) {
  inject('eventBus', eventBus)
  ctx.$eventBus = eventBus
}
