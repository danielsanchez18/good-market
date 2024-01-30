const draggableContainers = document.querySelectorAll('.draggable-container');

let activeDraggable = null;

draggableContainers.forEach(container => {
    container.addEventListener('dragstart', (e) => {
        activeDraggable = container;
        e.dataTransfer.setData('text/plain', '');
    });

    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    container.addEventListener('drop', (e) => {
        if (activeDraggable) {
            if (activeDraggable !== container) {
                container.appendChild(activeDraggable.querySelector('.product'));
            }
            activeDraggable = null;
        }
    });
});