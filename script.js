window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
  });

document.getElementById('emailForm').addEventListener('submit', function(e){
  e.preventDefault();
  var to = 'sarta.bhadauria@email.com';
  var name = document.getElementById('senderName').value.trim();
  var subject = document.getElementById('emailSubject').value.trim();
  var message = document.getElementById('emailMessage').value.trim();
  var body = message + '\n\n' + 'Name: ' + name;
  if(from) body += '\nEmail: ' + from;
  body += '\nLocation: Ahmedabad, India';
  var mailto = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  window.location.href = mailto;
});