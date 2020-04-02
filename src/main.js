const path = require('path')

export default function() {
  this.addPlugin({
    src: path.resolve(__dirname, 'event-bus.js'),
    fileName: 'generated.plugin.event-bus.js',
  })
}
