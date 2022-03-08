export function capitalize(prenom){
    if(prenom) return `${prenom[0]?.toUpperCase()}${prenom?.slice(1)}`
}

export function saveToStorage(data){
    localStorage.setItem("data", JSON.stringify(data))
}