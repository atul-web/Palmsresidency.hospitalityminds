<!DOCTYPE html>
<html>
<head>
  <title>Thank You</title>
  <style>
    .message {
      background-color: #f8d7da;
      border-color: #f5c6cb;
      color: #721c24;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid transparent;
      border-radius: .25rem;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <?php if(isset($_GET['name'])): ?>
          <div class="message">Thank you for contacting us, <?php echo htmlspecialchars($_GET['name']); ?>. We will get back to you shortly.</div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</body>
</html>
