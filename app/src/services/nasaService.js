export async function getAPOD(date, count) {
    const endDate = date.year + '-' + date.month + '-' + date.day

    var d = new Date(date.year, date.month - 1, date.day)
    d.setDate(d.getDate()-count);
    const startDate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=7P9X3Z5epo1Jt19CJQ1zEsiyfPqGiB9GsvnKV6Xn&thumbs=True&start_date=${startDate}&end_date=${endDate}`)
    const body = await response.json()

    if (response.status !== 200) {
        throw Error(body.message)
    }

    return body
};