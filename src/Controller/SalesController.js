export class SalesController {
    constructor(){
        this.sales = []
    }
    addSale(sale){
        this.sales.push(sale)
    }
    getSales(){
        return this.sales
    }
    setSales(sales){
        this.sales = sales
    }
    getTotalSales(){
        return this.sales.length
    }
    getTotalSalesByGame(id_game){
        let total = 0
        this.sales.forEach(sale => {
            if(sale.id_game === id_game){
                total += sale.total
            }
        })
        return total
    }
    getTotalSalesByClient(id_client){
        let total = 0
        this.sales.forEach(sale => {
            if(sale.id_client === id_client){
                total += sale.total
            }
        })
        return total
    }
    getTotalSales(){
        let total = 0
        this.sales.forEach(sale => {
            total += sale.total
        })
        return total
    }
}