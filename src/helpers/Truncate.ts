export default function truncateText(text: string, maxLength: number): string {
    if (text?.length <= maxLength) {
      return text; // No need to truncate if it's already within the limit
    } else {
      // Truncate the text and append "..."
      return text?.substring(0, maxLength - 3) + "...";
    }
  }
  