// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const projectItem = button.parentElement;
            const projectDetails = projectItem.querySelector('.project-details');
            const arrow = button.querySelector('.arrow');

            // Toggle the 'expanded' class on project details
            projectDetails.classList.toggle('expanded');

            // Toggle the 'expanded' class on the button to rotate the arrow
            button.classList.toggle('expanded');

            // Change button text
            if (projectDetails.classList.contains('expanded')) {
                button.innerHTML = '<span class="arrow">&#9654;</span> Collapse';
            } else {
                button.innerHTML = '<span class="arrow">&#9654;</span> Expand';
            }
        });
    });
});