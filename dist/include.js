async function includeHTML() {
      const response = await fetch('https://ieahts.org/whatsnew.html');
      if (response.ok) {
          const content = await response.text();
          const targetElement = document.getElementById('whatsnew');
          if (targetElement) { // Add a check to prevent error if element somehow still null
              targetElement.innerHTML = content;
          } else {
              console.error('Target element with ID "whatsnew" not found.');
          }
      } else {
          console.error('Failed to load HTML file:', response.status, response.statusText);
      }
  }

  // Call includeHTML after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', includeHTML);