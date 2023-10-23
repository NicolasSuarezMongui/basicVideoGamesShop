import { GamesController } from "../Controller/GamesController.js";

const game_styles = ['game','flex','items-center','justify-between','px-2.5','w-auto','h-24','border','border-white','rounded-lg','mb-2.5']

const controllerGame = new GamesController()

let getGame = localStorage.getItem('games')
if (getGame){
    controllerGame.setGames(JSON.parse(getGame))
}

export const CardGame = (id, name, theme, price, points) => {
    const game = document.createElement("div");
    game.classList.add(...game_styles);
    game.id = id;
    game.append(gameInfo(name,theme), gameInfoSale(price,points),gameActions());
    return game
}

const gameInfo = (name, theme) => {
    const info = document.createElement("div");
    info.classList.add("game-info","flex","items-center");
    const divInfo = document.createElement("div")
    divInfo.classList.add("info")
    const divName = document.createElement("div")
    divName.classList.add("name")
    divName.textContent = name
    const divMail = document.createElement("div")
    divMail.classList.add("theme")
    divMail.textContent = theme
    divInfo.append(divName,divMail)
    info.append(divInfo)
    return info
}

const gameInfoSale = (price, points) => {
    const gameInfo = document.createElement("div")
    gameInfo.classList.add("game-info-sale","flex","items-center","flex-col");
    const divName = document.createElement("div")
    divName.classList.add("name")
    divName.textContent = `Precio: $ ${price}`
    const divMail = document.createElement("div")
    divMail.classList.add("theme")
    divMail.textContent = `Puntos: ${points}`
    gameInfo.append(divName,divMail)
    return gameInfo
}

const gameActions = () => {
    const actions = document.createElement("div")
    actions.classList.add("actions","flex","justify-between","text-2xl")

    const viewButton = action("view-game",["fa-solid","fa-cart-shopping"])
    viewButton.addEventListener("click",()=>{
        document.getElementById("modal-sale").classList.toggle("hidden")
    })

    const delButton = action("del-game",["fa-solid","fa-trash"])
    delButton.addEventListener("click",()=>{
        const game = controllerGame.getGameById(actions.parentElement.id)
        controllerGame.deleteGame(game)
        localStorage.setItem("games",JSON.stringify(controllerGame.games))
        location.reload()
    })
    actions.append(viewButton, delButton)
    return actions
}

const actions_style = ["flex", "justify-center","items-center","mx-1.5","hover:bg-red-900","w-12","h-12","rounded-lg","cursor-pointer"]

const action = (text_action,class_icon) =>{
    const divAction = document.createElement("div")
    divAction.classList.add(text_action,...actions_style)
    const icon = document.createElement("i")
    icon.classList.add(...class_icon)
    divAction.appendChild(icon)
    return divAction
}