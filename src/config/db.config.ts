import mongoose from 'mongoose';
import ENVIRONMENT from './env.config';

const connectToDB = async (): Promise<void> => {
  const mongoURI = ENVIRONMENT.DB_URI;

  // Check if DB_URI is undefined
  if (!mongoURI) {
    console.error('Error: MongoDB URI is undefined. Please set the DB_URI in the environment variables.');
    process.exit(1); // Exit with failure if no MongoDB URI is found
  }

  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(mongoURI);
    console.log(`Connected to MongoDB ${ENVIRONMENT.nodeEnv} database`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

// Function to close the MongoDB connection
const disconnectFromDB = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
};

export { connectToDB, disconnectFromDB };
