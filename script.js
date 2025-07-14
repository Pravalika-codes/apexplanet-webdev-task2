// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailPattern = /^\S+@\S+\.\S+$/;

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    e.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  } else {
    alert('Your message was sent successfully!');
    this.reset(); // clear form
  }
});

// To-Do List
function addTask() {
  const taskText = document.getElementById('taskInput').value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.title = "Click to remove";
    li.onclick = () => li.remove();
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
  } else {
    alert('Please enter a task.');
  }
}

// Image Gallery (upload local image)
function addLocalImage() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = "Local Image";
      img.title = "Click to remove";
      img.onclick = () => img.remove();
      document.getElementById('imageGallery').appendChild(img);
    }
    reader.readAsDataURL(file);
    fileInput.value = ''; // clear input
  } else {
    alert('Please select an image.');
  }
}

 