export class Sale{
    constructor(id_client, id_game, total){
        this._id_client = id_client
        this._id_game = id_game
        this._total = total
    }
    get id_client() { return this._id_client }
    get id_game() { return this._id_game }
    get total() { return this._total }
}