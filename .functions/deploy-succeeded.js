const lifx = require('lifx-http-api')

const client = new lifx({
  bearerToken: process.env['LIFX_TOKEN'],
})

const lifxBulbId = `id:${process.env['LIFX_BULB_ID']}`

exports.handler = function(event, context, callback) {
  let evtBody = JSON.parse(event.body)
  if (evtBody.payload.context === 'production') {
    console.log('deploy success')

    client.listLights(lifxBulbId).then(bulbs => {
      if (bulbs[0].power === 'on') {
        client.pulse(lifxBulbId, { color: 'green', period: 5 }).then(() => {
          callback(null, { statusCode: 200 })
        })
      }
    })
  }
}
