function checkCertificate() {
  const no = document.getElementById('certNo').value.trim();
  if (!no) {
    document.getElementById('result').innerHTML = '<p style="color:red">Please enter C.No!</p>';
    return;
  }
  // পরে ডিটেইলস পেজে পাঠাবো
  document.getElementById('result').innerHTML = '<p style="color:green">Checking certificate ' + no + '...</p>';
}
