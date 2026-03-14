export const formatCityName = (str) => {

  return str.toLowerCase()
            .split(/([ -])/)
            .map(part => part === " " || part === "-" ? part : part.charAt(0).toUpperCase() + part.slice(1))
            .join("");
};