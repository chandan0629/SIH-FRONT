document.getElementById('details-btn').addEventListener('click', function() {
    var details = document.getElementById('details');
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        this.textContent = 'Hide Details';
    } else {
        details.classList.add('hidden');
        this.textContent = 'Show Details';
    }
});
