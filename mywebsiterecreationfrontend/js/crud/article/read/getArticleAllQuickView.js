/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: June 18, 2023
    Description: This is javascript file is for article all quick view from the database web sever.
    Notes:
    Resources: 
*/

const getArticleAllQuickView = async (offsetNum = 0, limitNum = 10) => {
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

export default getArticleAllQuickView