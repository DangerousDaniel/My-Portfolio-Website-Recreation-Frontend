const getArticleDetail = async (id) => {
    const response = await fetch(`http://35.227.50.190/article/detail/${id}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()
    let articleJsonData = data[0].article
    return articleJsonData
}

export default getArticleDetail