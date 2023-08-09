function getFormattedDate() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = [
        "janeiro", "fevereiro", "março", "abril",
        "maio", "junho", "julho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"
    ];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return `${day} de ${month} de ${year}`;
}

module.exports = {
    getFormattedDate
};
