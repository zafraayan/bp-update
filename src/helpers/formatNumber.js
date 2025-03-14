export const formatNumber = (value) => {
  const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
  return Number(numericValue).toLocaleString(); // Format with commas
};
