.errorPageContainer {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  height: 100vh; /* Full viewport height */
  background-color: #f8f8f8; /* Light background */
}

.errorMessageContainer {
  background-color: #fff; /* White background for the error box */
  padding: 20px 40px;
  border-radius: 25px; /* Oval-shaped box */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow for the container */
  text-align: center; /* Center the text */
  max-width: 500px; /* Limit the width of the container */
  width: 80%; /* Allow some flexibility in width */
}

.errorMessage {
  color: #e74c3c; /* Red color for the error message */
  font-size: 24px; /* Larger font for visibility */
  margin-bottom: 10px;
  font-weight: bold;
}

.errorDescription {
  color: #555; /* Dark gray text for the description */
  font-size: 16px; /* Smaller font for the description */
  line-height: 1.5;
}