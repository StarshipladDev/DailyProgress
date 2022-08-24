<?php
/*Credentials */

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT Id,Name,ReleaseId, CardType FROM Cards";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	echo "{";
	echo "\r\n\"Id\":\"" . $row["Id"] . "\",";
	echo "\r\n\"Name\":\"" . $row["Name"] . "\",";
	echo "\r\n\"ReleaseId\":\"" . $row["ReleaseId"] . "\",";
	echo "\r\n\"CardType\":\"" . $row["CardType"] . "\"";
	echo "}";
	}
} else {
  echo "0 results";
}

?>