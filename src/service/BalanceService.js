export function getBalanceByMonth() {
    return fetch('http://192.168.1.108:8081/balance')
    .then(reponse => reponse.json())
}