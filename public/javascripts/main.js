function setFilter(filter, color) {
    if(!filter.color) {
        return `?color=${color}`;
    } else {
        if(filter.color === color) {
            return '';
        } else if (filter.color.includes(color)) {
            return `?color=${filter.color.replace(color, '')}`
        } 
    }
}

 