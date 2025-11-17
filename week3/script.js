// HAMBURGER MENU
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".side-menu").toggleClass("open");
  });
});

// FORM SUBMISSION
function submitForm() {

  const fullName = $("#fullName").val();
  const current = Number($("#currentWeight").val());
  const w1 = Number($("#weight1yr").val());
  const w2 = Number($("#weight2yr").val());

  // SAVE TO LOCAL STORAGE
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("weightData", JSON.stringify([w2, w1, current]));

  // REDIRECT TO ANALYSIS PAGE
  window.location.href = "analysis.html";
}

// ANALYSIS PAGE CHART
$(document).ready(function () {

  // Run ONLY if we are on analysis.html
  if ($("#weightChart").length) {

    const name = localStorage.getItem("fullName") || "";
    const weightData = JSON.parse(localStorage.getItem("weightData")) || [0, 0, 0];

    // Show name
    $("#userNameDisplay").text(name + "'s Weight Trend");

    const ctx = document.getElementById("weightChart").getContext("2d");

    // Create Chart
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2 Years Ago", "1 Year Ago", "Current"],
        datasets: [{
          label: "Weight (kg)",
          data: weightData,
          borderWidth: 3,
          borderColor: "brown",
          backgroundColor: "rgba(165, 42, 42, 0.3)"
        }]
      },
      options: {
        responsive: true
      }
    });
  }
});
