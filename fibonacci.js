function fibonacci(position){
    if (position < 0) {
        console.log("position is negative.");
    }
    if (position < 2) {
        return position;
    }
    return fibonacci(position - 2) + fibonacci(position - 1);
}