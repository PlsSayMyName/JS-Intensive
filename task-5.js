myIterable[Symbol.iterator] = function() {
    if (this.to < this.from || !this.to || this.from || typeof this.to !== 'number' || typeof this.from !== 'number') {
        throw new Error('Error! Something went wrong...');
    } else {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true}
                }
            }
        };
    }
};