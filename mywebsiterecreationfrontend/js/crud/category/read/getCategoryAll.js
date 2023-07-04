/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: July 4, 2023
    Description: This is javascript file is for get category all from the database web sever.
    Notes:
    Resources: 
*/

const getCategoryAll = async () => {
    const response = await fetch(`https://dangerousdan996-django-backend-86bfbdd18077.herokuapp.com/category/all`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()
    let categoryListJsonData = data[0].categories
    return categoryListJsonData
}

export default getCategoryAll