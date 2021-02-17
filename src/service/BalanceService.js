export function getBalanceByMonth() {
    return fetch('http://localhost:8081/balance')
    .then(reponse => reponse.json())
}