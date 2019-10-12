const setItem = function(key, value) {
	if (value == null || value == undefined || value == 'undefined') {
		localStorage.setItem(key, value)
    }else{
		localStorage.setItem(key, JSON.stringify(value))
	}
}

const getItem = function(key) {
    let value = localStorage.getItem(key)
    if (value == null || value == undefined || value == 'undefined') {
        return ''
    }
    return JSON.parse(value)
}

const removeItem = function(key) {
    if (!key) {
        return
    }
    localStorage.removeItem(key)
}

const clearAll = function() {
    localStorage.clear()
}

export default {
    setItem,
    getItem,
    removeItem,
    clearAll
}