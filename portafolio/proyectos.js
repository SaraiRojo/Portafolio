document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    const projectImage = document.getElementById('project-image');

    projectList.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('project-item')) {
            const imagePath = e.target.getAttribute('data-image');
            projectImage.src = imagePath;
            projectImage.style.display = 'block';
        }
    });

    projectList.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('project-item')) {
            projectImage.style.display = 'none';
        }
    });

    projectList.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-item')) {
            const link = e.target.getAttribute('data-link');
            window.location.href = link;
        }
    });
});
