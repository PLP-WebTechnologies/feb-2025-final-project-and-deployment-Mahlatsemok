// Event listener for Shop Now button
document.getElementById("shopNowBtn").addEventListener("click", function () {
  alert("Redirecting to product listings!");
  this.style.backgroundColor = "#28a745";
  this.style.transform = "scale(1.1)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 200);
});
