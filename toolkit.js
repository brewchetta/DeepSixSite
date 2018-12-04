// This has several toolkit functions that need to get loaded first
// Place functions here that will need to be used across several pages and
// have very general uses


// Capitalizes the first letter of a string
String.prototype.capitalize = function() {
  if (this.length > 0) {
    return this.charAt(0).toUpperCase() + this.slice(1)
  } else { return '' }
}

// Returns a random element in an array
Array.prototype.random = function() {
  if (this.length > 0) {
    return this[Math.floor(Math.random() * this.length)];
  } else { return undefined }
}
