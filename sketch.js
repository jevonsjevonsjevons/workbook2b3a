function expandProject(index) {
  // Show the modal container
  document.getElementById('projectExpanded').style.display = 'flex';
  document.getElementById('projectTitle').innerText = `Exercise ${index}`;

  // Grab the container and clear anything that was in it
  const container = document.getElementById('iframeContainer');
  container.innerHTML = '';

  if (index === 1) {
    // 📸 If it's Exercise 1, show the static image
    const img = document.createElement('img');
    img.src = 'img/Excercise1.jpeg';
    container.appendChild(img);
  } else {
    // 🧠 Otherwise, embed the p5.js sketch inside an iframe
    const iframe = document.createElement('iframe');
    iframe.src = `Excercises/Excercise${index}/index.html`;
    container.appendChild(iframe);
  }
}
