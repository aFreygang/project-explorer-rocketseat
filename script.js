const body_page = document.querySelector('body')
const change_colors = document.querySelectorAll('ul .alterar-cores')

for (const element of change_colors) {
  element.addEventListener('click', function () {
    if (element.id === 'light-theme-pink') {
      body_page.className = ''
      body_page.classList.toggle('light-pink')
    } else if (element.id === 'dark-theme-blue') {
      body_page.className = ''
      body_page.classList.toggle('dark-blue')
    } else if (element.id === 'dark-theme-pink') {
      body_page.className = ''
      body_page.classList.toggle('dark-pink')
    } else {
      body_page.className = ''
    }
  })
}
