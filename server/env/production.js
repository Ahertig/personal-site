/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */

module.exports = {
    "DATABASE_URI": "mongodb://heroku_vf3ncj9j:i2m8sbi3ue5tl00jc9su3lk16s@ds027345.mlab.com:27345/heroku_vf3ncj9j",
    "SESSION_SECRET": process.env.SESSION_SECRET,
    "TWITTER": {
        "consumerKey": process.env.TWITTER_CONSUMER_KEY,
        "consumerSecret": process.env.TWITTER_CONSUMER_SECRET,
        "callbackUrl": process.env.TWITTER_CALLBACK
    },
    "FACEBOOK": {
        "clientID": process.env.FACEBOOK_APP_ID,
        "clientSecret": process.env.FACEBOOK_CLIENT_SECRET,
        "callbackURL": process.env.FACEBOOK_CALLBACK_URL
    },
    "GOOGLE": {
        "clientID": process.env.GOOGLE_CLIENT_ID,
        "clientSecret": process.env.GOOGLE_CLIENT_SECRET,
        "callbackURL": process.env.CALLBACK_URL
    }
};