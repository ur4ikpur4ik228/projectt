document.querySelectorAll('.movable-word').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.movable-word').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
