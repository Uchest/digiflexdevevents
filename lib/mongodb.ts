import mongoose from 'mongoose';

// Define the type for our cached connection
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Extend the global object to include our mongoose cache
declare global {
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

// Initialize the cache on the global object to persist across hot reloads in development
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Caches the connection to prevent multiple connections during development hot reloads.
 * @returns {Promise<typeof mongoose>} The mongoose instance
 */
async function dbConnect(): Promise<typeof mongoose> {
  // Validate MONGODB_URI is defined before attempting connection
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }

  // If connection already exists, return it immediately
  if (cached.conn) {
    return cached.conn;
  }

  // If no connection exists but a promise is pending, wait for it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable mongoose buffering to fail fast if connection is down
    };

    // Create a new connection promise
    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then(mongoose => {
        return mongoose;
      });
  }

  try {
    // Wait for the connection to establish and cache it
    cached.conn = await cached.promise;
  } catch (e) {
    // If connection fails, reset the promise so we can retry
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
