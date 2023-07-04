/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: June 18, 2023
    Description: This is javascript file is for get category detail from the database web sever.
    Notes:
    Resources: 
*/

const getCategoryDetail = async (id) => {
    const response = await fetch(`http://35.227.50.190/category/detail/${id}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()
    let CategoryJsonData = data[0].category
    return CategoryJsonData
}

export default getCategoryDetail