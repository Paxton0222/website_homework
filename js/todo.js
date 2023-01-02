const sideMenu = document.querySelector('.side_menu')
const todoList = document.querySelector('.todo_list')

/**
 * Toggle 側邊欄
 */
const toggleSideMenu = () => {
    sideMenu.classList.toggle('side_close')
    todoList.classList.toggle('side_menu_open')
}

/**
 * Toggle 代辦資料夾
 * @param {*} event 
 */
const toggleProjectDirectory = (event) => {
    /**
     * Toggle 資料夾箭頭 Icon
     * @param {*} event 
     */
    const toggleIcon = (event) => {
        const icon = event.querySelector('svg')
        if (icon.classList.contains('fa-caret-right')){
            icon.classList.toggle('fa-caret-down')
        }
        else{
            icon.classList.toggle('fa-caret-right')
        }
    }
    /**
     * Toggle 資料夾下的TODO資料
     * @param {*} event 
     */
    const toggleDirectory = (event) => {
        const directory = event.parentNode.querySelector('.project_directory')
        directory.classList.toggle('hidden')
    }
    toggleIcon(event)
    toggleDirectory(event)
}

/**
 * Toggle 代辦事項的操作選單
 * @param {*} event 
 */
const toggleTodoMenu = (event) => {
    let menu = event.parentNode.querySelector('.todo_menu')
    menu.classList.toggle('hidden')
}