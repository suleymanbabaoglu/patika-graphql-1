const Redis = require("ioredis");
const { createPubSub } = require("@graphql-yoga/common");
const { createRedisEventTarget } = require("@graphql-yoga/redis-event-target");

const options = {
  host: "localhost",
  port: 6379,
  retryStrategy: (options) => {
    return Math.max(options.attempt * 100, 3000);
  },
};

const publishClient = new Redis(options);
const subscribeClient = new Redis(options);

const eventTarget = createRedisEventTarget({
  publishClient,
  subscribeClient,
});

const pubSub = createPubSub({
  eventTarget,
});

module.exports = pubSub;
