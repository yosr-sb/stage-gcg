<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gcgabes";  // Updated database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Validate and fetch POST data
$n = isset($_POST['n']) ? $_POST['n'] : '';
$p = isset($_POST['pr']) ? $_POST['pr'] : '';
$t = isset($_POST['t']) ? $_POST['t'] : '';
$e = isset($_POST['e']) ? $_POST['e'] : '';
$m = isset($_POST['m']) ? $_POST['m'] : '';

if (empty($n) || empty($p) || empty($t) || empty($e)) {
    die("All fields except 'm' are required.");
}

// Insert new record
$stmt = $conn->prepare("INSERT INTO contact (n, pr, tele, e, m) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $n, $p, $t, $e, $m);

if ($stmt->execute()) {
    echo "Nouvel enregistrement ajouté avec succès.";
} else {
    echo "Erreur: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>