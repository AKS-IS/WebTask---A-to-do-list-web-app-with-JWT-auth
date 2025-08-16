import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Use IP address or user id as key for rate limiting
    const key = req.ip || req.headers["x-forwarded-for"] || "anonymous";
    const { success } = await ratelimit.limit(key);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
