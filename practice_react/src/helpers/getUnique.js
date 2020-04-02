export default function getUnigue(items, value) { 
    return [...new Set(items.map(item => item[value]))]
}