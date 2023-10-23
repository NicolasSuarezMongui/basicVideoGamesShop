import { Client } from "./src/Models/Client.js";
import { ClientsController } from "./src/Controller/ClientsController.js";
import { CardClient } from "./src/components/CardClient.js";
import { GamesController } from "./src/Controller/GamesController.js";
import { Game } from "./src/Models/Game.js";
import { CardGame } from "./src/components/CardGame.js";
import { SalesController } from "./src/Controller/SalesController.js";

window.addEventListener("load",()=>{
    updateList()
    document.getElementById("total_users").innerHTML = controllerClient.getTotalClients()
    document.getElementById("total_games").innerHTML = controllerGame.getTotalGames()
    document.getElementById("total_sales").innerHTML = controllerSale.getTotalSales()
    updateListLoyalty()
    updateListGames()
    listUsers()
})

const listUsers = () => {
    controllerClient.clients.forEach(client => {
        const optionItem = document.createElement("option")
        let data = controllerClient.transform(client)

        optionItem.textContent = data.id + " -> " + data.fullName
        document.getElementById("user_select").append(optionItem)
    })
}

const updateList = () => {
    const divClients = document.getElementById("clientsList")
    controllerClient.clients.forEach(client => {
        let data = controllerClient.transform(client)
        divClients.append(CardClient(data.id,null,data.fullName,data.email))
    })
}

const updateListGames = () => {
    const divGames = document.getElementById("gamesList")
    controllerGame.games.forEach(game => {
        divGames.append(CardGame(game._id, game._name, game._theme, game._price, game._points))
    })
}

const updateListLoyalty = () => {
    const divClients = document.getElementById("loyaltyList")
    controllerClient.orderByPoints()
    controllerClient.clients.forEach(client => {
        let data = controllerClient.transform(client)
        divClients.append(CardClient(data.id,null,data.fullName,data.email))
    })
}

const controllerClient = new ClientsController();
const controllerGame = new GamesController();
const controllerSale = new SalesController();


let getClient = localStorage.getItem('clients')
if (getClient){
    controllerClient.setClients(JSON.parse(getClient))
}

let getGames = localStorage.getItem('games')
if (getGames){
    controllerGame.setGames(JSON.parse(getGames))
}

let getSales = localStorage.getItem('sales')
if (getSales){
    controllerSale.setSales(JSON.parse(getSales))
}

function showToast() {
    document.getElementById("toast-success").classList.remove("hidden");

    setTimeout(()=>{
        document.getElementById("toast-success").classList.add("hidden");
    }, 2000);
}

const sidebar = document.querySelector("nav");

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close"){
    sidebar.classList.toggle("close");
}

document.getElementById("menu").addEventListener("click",()=>{
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})

document.getElementById("newClient").addEventListener("click",()=>{
    document.getElementById("modal-client").classList.toggle("hidden")
});

document.getElementById("newGame").addEventListener("click",()=>{
    document.getElementById("modal-game").classList.toggle("hidden")
});

const form = document.getElementById("form-client");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    const client = new Client(data.client_id, data.first_name, data.last_name, data.cel_phone, data.email,data.birth_date,data.nacionality,"")
    controllerClient.addClient(client)
    localStorage.setItem("clients",JSON.stringify(controllerClient.clients))
    location.reload()
})

const formGame = document.getElementById("form-game");

const theme = document.getElementById("underline_select")

formGame.addEventListener("submit",(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    const game = new Game(controllerGame.getTotalGames()+1, data.name, theme.value , data.price, data.points)
    controllerGame.addGame(game)
    localStorage.setItem("games", JSON.stringify(controllerGame.games))
    location.reload()
})

function change_content(id){
    const divActive = document.querySelector(".active");
    divActive.classList.toggle("active");
    divActive.classList.toggle("hidden");
    document.getElementById(id).classList.toggle("active");
    document.getElementById(id).classList.toggle("hidden");
}

document.getElementById("_home").addEventListener("click",()=>{
    change_content("home_content");
});

document.getElementById("_clients").addEventListener("click",()=>{
    change_content("clients_content");
});

document.getElementById("_games").addEventListener("click",()=>{
    change_content("games_content");
});

document.getElementById("_loyalty").addEventListener("click",()=>{
    change_content("loyalty_content");
});

document.getElementById("continue_sale").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("modal-sale").classList.toggle("hidden")
    document.getElementById("modal-finish-sale").classList.toggle("hidden");
})