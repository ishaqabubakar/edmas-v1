import { v4 as uuidv4 } from 'uuid';

// Function to pad a number with leading zeros
const padWithZeros = (num: number, length: number): string => {
  return num.toString().padStart(length, '0');
};

// Function to generate a unique identifier based on school name
export const generateUserId = (schoolName: string, currentCount: number): string => {
  // Extract first letter of each word in the school name
  const initials = schoolName
    .split(' ')
    .map((word) => word[0])
    .join('');

  // Generate a UUID
  const uuid = uuidv4();

  // Extract only numbers from the UUID
  const numbersOnly = uuid.replace(/\D/g, '');

  // Get the first five digits of the numbersOnly string
  const firstFiveDigits = numbersOnly.substring(0, 5);

  // Convert the firstFiveDigits to a number and ensure it is within the range
  const numberInRange = Math.min(parseInt(firstFiveDigits, 10), 99999);

  // Combine initials and the padded number to create a unique identifier
  const uniqueId = `${initials.toUpperCase()}${padWithZeros(
    (numberInRange + currentCount) % 100000, // Ensuring the count stays within 5 digits
    5
  )}`;

  return uniqueId;
};
