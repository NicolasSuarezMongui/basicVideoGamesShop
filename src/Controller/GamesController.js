export class GamesController{
    constructor(){
        this.games = []
    }

    addGame(game){
        this.games.push(game)
    }

    deleteGame(game){
        this.games.splice(this.games.indexOf(game),1)
    }

    transform(game){
        return {
            id: game._id,
            name: game._name,
            theme: game._theme,
            price: game._price,
            points: game._points
        }
    }
    
    getGameById(id){
        alert("Entra a hacer la busueda");
        alert(JSON.stringify(this.games));
        return this.games.find(game => game._id === id)
    }

    getGames(){
        return this.games
    }

    setGames(games){
        this.games = games
    }

    getTotalGames(){
        return this.games.length
    }

}