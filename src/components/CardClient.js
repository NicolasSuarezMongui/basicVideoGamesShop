
import { ClientsController } from "../Controller/ClientsController.js";


const controllerClient = new ClientsController()

let getClient = localStorage.getItem('clients')
if (getClient){
    controllerClient.setClients(JSON.parse(getClient))
}

const client_styles = ['client','flex','items-center','justify-between','px-2.5','w-auto','h-24','border','border-white','rounded-lg','mb-2.5']


export const CardClient = (id, img, name, mail) => {
    if (!img){
        img = "./src/imgs/img_user.png"
    }
    const client = document.createElement("div");
    client.classList.add(...client_styles);
    client.id = id;
    client.append(clientInfo(img,name,mail),clientActions());
    return client
}

const clientInfo = (img, name, mail) => {
    const info = document.createElement("div");
    info.classList.add("client-info","flex","items-center");
    const img_client = document.createElement("img");
    img_client.src = img;
    img_client.classList.add("h-14","w-14","mx-5")
    const divImg = document.createElement("div");
    divImg.classList.add("img-profile")
    divImg.appendChild(img_client);
    const divInfo = document.createElement("div")
    divInfo.classList.add("info")
    const divName = document.createElement("div")
    divName.classList.add("name")
    divName.textContent = name
    const divMail = document.createElement("div")
    divMail.classList.add("mail")
    divMail.textContent = mail
    divInfo.append(divName,divMail)
    info.append(divImg,divInfo)
    return info
}

const clientActions = () => {
    const actions = document.createElement("div")
    actions.classList.add("actions","flex","justify-between","text-2xl")

    const viewButton = action("view-client",["fa-solid","fa-circle-info"])


    const editButton = action("edit-client",["fa-solid","fa-pen-to-square"])

    const delButton = action("del-client",["fa-solid","fa-trash"])
    delButton.addEventListener("click",()=>{
        const client = controllerClient.getClient(actions.parentElement.id)
        controllerClient.delClient(client)
        localStorage.setItem("clients",JSON.stringify(controllerClient.clients))
        location.reload()
    })
    actions.append(viewButton,editButton, delButton)
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