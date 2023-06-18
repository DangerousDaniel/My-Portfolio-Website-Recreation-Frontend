const getAllArticleQuickView = async (offsetNum = 0, limitNum = 10) => {
    const response = await fetch(`http://35.227.50.190/article/all/quick-view/${offsetNum}/${limitNum}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()
    let articlesListJsonData = data[0].articles
    return articlesListJsonData
}

export default getAllArticleQuickView