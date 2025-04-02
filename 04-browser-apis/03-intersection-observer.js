// Intersection Observer API Example

// Function to be called when the observed element intersects the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}

// Options for the observer: root is the viewport, and we want to trigger the observer when 50% of the element is visible
const options = {
    root: null,  // Viewport is the default root
    threshold: 0.5  // 50% of the element should be visible
};

// Creating a new Intersection Observer instance with the callback function and options
const observer = new IntersectionObserver(handleIntersection, options);

// Target all elements with the class 'box' for intersection observation
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    observer.observe(box);  // Start observing each box
});
