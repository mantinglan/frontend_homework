function debounce(func, delay){
    let debounceTimer = null;
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(func, delay);
}