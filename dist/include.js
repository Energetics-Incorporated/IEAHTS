async function includeHTML() {
    const response = await fetch('https://ieahts.org/whatsnew.html');
    if (response.ok) {
      const content = await response.text();
      document.getElementById('whatsnew').innerHTML = content;
    } else {
      console.error('Failed to load HTML file');
    }
  }
includeHTML()