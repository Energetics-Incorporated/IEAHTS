async function includeHTML() {
    const response = await fetch(`https://ieahts.org/whatsnew.html?v=${Date.now()}`, { cache: 'no-store' });
    if (response.ok) {
        const content = await response.text();
        const targetElement = document.getElementById('whatsnew');
        if (targetElement) {
            targetElement.innerHTML = content;
        } else {
            console.error('Target element with ID "whatsnew" not found.');
        }
    } else {
        console.error('Failed to load HTML file:', response.status, response.statusText);
    }
}

document.addEventListener('DOMContentLoaded', includeHTML);