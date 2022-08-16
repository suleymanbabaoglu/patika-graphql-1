import Redis from "ioredis";
import { createPubSub } from "@graphql-yoga/common";
import { createRedisEventTarget } from "@graphql-yoga/redis-event-target";

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

export default pubSub;
