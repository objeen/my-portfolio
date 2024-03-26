function addRecommendation() {
    showPopup(true);
    function addRecommendation() {
        // Get the input value
        var recommendation = document.getElementById("recommendation_input").value;
      
        // Check if the recommendation is not empty
        if (recommendation !== "") {
          // Add the recommendation to the list
          var recommendationList = document.getElementById("recommendation_list");
          var listItem = document.createElement("li");
          listItem.textContent = recommendation;
          recommendationList.appendChild(listItem);
      
          // Clear the input value
          document.getElementById("recommendation_input").value = "";
      
          // Invoke the showPopup() function
          showPopup();
        }
      }
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
