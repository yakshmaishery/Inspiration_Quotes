
// fetch('quotes.json').then(response => response.text()).then(text => console.log(text))

window.addEventListener("DOMContentLoaded", () => {
    const Next_Quote_FUNC = async() => {
        let DATA = [];
        let Total_DATA;
        // Get The Data
        await fetch('quotes.json').then(response => response.text()).then(text => {DATA = JSON.parse(text)})
        // Total Number od Data
        Total_DATA = DATA.length
        // random from DATA
        let random_selection = Math.floor(Math.random()*Total_DATA)
        document.getElementById("quote").innerHTML = `" ${DATA[random_selection].text} "`
        document.getElementById("auther").innerHTML = ` - ${DATA[random_selection].author}`
    }
    Next_Quote_FUNC()
    document.getElementById("nextbtn").addEventListener("click", () => {Next_Quote_FUNC()})
})