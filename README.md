# Store_Products

## :rocket: Rotas

```yml
POST /cakes
    - Deve receber as informações necessárias para a criação de um novo tipo de bolo.
    - headers: {}
    - body:{
        "name": "Bolo de pote",
        "price": 13.00,
        "image":"encurtador.com.br/iDIX0",
        "description": "Bolo de chocolate com recheio de leite ninho"
      }

```
```yml
POST /clients
    - Deve receber as informações necessárias para a criação de um novo cliente.
    - headers: {}
    - body:{
        "name": "Bolo de pote",
        "price": 13.00,
        "image":"encurtador.com.br/iDIX0",
        "description": "Bolo de chocolate com recheio de leite ninho"
      }

```
```yml
POST /order
    - Deve receber as informações necessárias para registrar um novo pedido.
    - headers: {}
    - body:{
        "clientId": 1,
        "cakeId": 1,
        "quantity": 2,
        "totalPrice": 26.00
      }

```

```yml
GET /orders
    - Deve retornar as informações dos pedidos.
    - headers: {}
    - body:{
        [
         {
            "client": {
                "id": 1,
                "name": "Fulana",
                "address": "Rua tal",
                "phone": "2199999999"
            },
            "cake": {
                "id": 1
                "name": "Bolo de pote",
                "price": "13.00",
                "description": "Bolo de chocolate com recheio de leite ninho",
                "image": "encurtador.com.br/iDIX0"
            },
            "orderId": 1,
            "createdAt": "2022-03-16 10:30",
            "quantity": 2,
            "totalPrice": 26.00
          }
        ]
      }

```

```yml
GET /orders/:id
    - Deve retornar as informações do pedido com id específico, seguindo o formato abaixo.
    - headers: {}
    - body:{
        "client": {
        "id": 1,
        "name": "Fulana",
        "address": "Rua tal",
        "phone": "2199999999"
        },
        "cake": {
            "id": 1
            "name": "Bolo de pote",
            "price": "13.00",
            "description": "Bolo de chocolate com recheio de leite ninho",
            "image": "encurtador.com.br/iDIX0"
        },
        "orderId": 1,
        "createdAt": "2022-03-16 10:30",
        "quantity": 2,
        "totalPrice": 26.00
      }

```

```yml
GET  /clients/:id/orders
    - Deve retornar todos os pedidos de um determinado cliente.
    - headers: {}
    - body:{
        [
          {
              "orderId": 1,
              "quantity": 2,
              "createdAt": "2022-03-16 10:30",
              "totalPrice": 26.00,
              "cakeName": "Bolo de pote"
          }
        ]
      }

```
