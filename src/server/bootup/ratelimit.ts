import rateLimit from 'express-rate-limit'; // Limits allowed calls for x amount of ms
import slowDown from 'express-slow-down'; // Slows each following request if spammed

const rateLimiter = rateLimit({
  windowMs: 30 * 1000,
  max: 10
});

const speedLimiter = slowDown({
  windowMs: 30 * 1000,
  delayAfter: 1,
  delayMs: 1000
});

export { rateLimiter, speedLimiter };
