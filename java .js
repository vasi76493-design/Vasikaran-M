
Okay 👍 Let’s do both: a basic HTML program (webpage) and a JavaScript program (script inside it).

Here’s a simple example that shows a button on a webpage. When you click the button, JavaScript will display a message:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="vasikarancontent="width=device-width, initial-scale=1.0">
  <title>My First HTML & JavaScript Program</title>
</head>
<body>
  <h1>Hello from HTML</h1>
  <p>Click the button to see JavaScript in action:</p>
  
  <!-- Button -->
  <button onclick="showMessage()">Click Me</button>

  <!-- Script -->
  <script>
    function showMessage() {
      alert("Hello! This message is from JavaScript.");
    }
  </script>
</body>
</html


