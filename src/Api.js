import {API_URL} from './config'

const getMealById = async (mealId) =>{
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
    return await response.json()
}

const getAllCategories= async () =>{
    const response = await fetch(API_URL + 'categories.php')
    return await response.json()
}

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName )
    return await response.json()
}

const getRandomMeal = async () => {
    const response = await fetch(API_URL + 'random.php')
    return await response.json()
}

const getAllCountry = async () => {
    const response = await fetch(API_URL + 'list.php?a=list')
    return await response.json()
}

const getFilteredArea = async (areaName) => {
    const response = await fetch(API_URL + 'filter.php?a=' + areaName )
    return await response.json()
}


export {getFilteredArea, getAllCountry, getRandomMeal, getMealById, getAllCategories, getFilteredCategory}