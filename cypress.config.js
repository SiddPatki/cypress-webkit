module.exports = {
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config)
    // },
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
    experimentalWebKitSupport: true,
    setupNodeEvents(on, config) {
      // set any additional user values
      config.env.registered = true
      config.env.user = {
        roshan: process.env.ROSHAN,
      }
      // REMEMBER TO RETURN THE CHANGED CONFIG OBJECT
      return config
    },
    env: {
      roshan: process.env.ROSHAN
    }
  },
}