
document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', function() {
        const panelCollapse = this.nextElementSibling;
        const arrowDown = this.querySelector('.arrow-down');
        const arrowUp = this.querySelector('.arrow-up');
        
        if (panelCollapse.classList.contains('collapse')) {
            panelCollapse.classList.remove('collapse');
            panelCollapse.classList.add('show');
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'inline';
        } else {
            panelCollapse.classList.add('collapse');
            panelCollapse.classList.remove('show');
            arrowDown.style.display = 'inline';
            arrowUp.style.display = 'none';
        }
    });
});
