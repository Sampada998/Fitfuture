$(document).ready(function(){

  // Hamburger toggle
  $(".hamburger").click(function(){
    $(".menu").toggle();
  });

  // Navigation buttons
  $(".nav-btn").click(function(){
    const target = $(this).data("target");
    if(target){
      window.location.href = target; // Navigate to HTML page
    }
  });

  // Form submission: save data to localStorage
  $("#submitForm").click(function(){
    const fullName = $("#fullName").val();
    const current = Number($("#currentWeight").val());
    const w1 = Number($("#weight1yr").val());
    const w2 = Number($("#weight2yr").val());

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("weightData", JSON.stringify([w2, w1, current]));

    window.location.href = "analysis.html";
  });

  // Load chart on analysis page
  if($("#weightChart").length && localStorage.getItem("weightData")){
    const fullName = localStorage.getItem("fullName");
    const weightData = JSON.parse(localStorage.getItem("weightData"));
    $("#userNameDisplay").html(`<strong>${fullName}</strong>'s Weight History`);

    const ctx = document.getElementById('weightChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2 years ago','1 year ago','Current'],
        datasets: [{
          label: 'Weight (kg)',
          data: weightData,
          backgroundColor: ['#f1c40f','#e67e22','#2ecc71']
        }]
      },
      options: { responsive:true, plugins:{legend:{display:false}} }
    });
  }

  $("#futureBtn").click(function(){ alert("Future prediction coming soon!"); });
  $("#pastBtn").click(function(){ alert("Past trend coming soon!"); });

});
