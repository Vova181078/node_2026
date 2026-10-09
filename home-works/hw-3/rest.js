
//     При створенні робити валідацію на імʼя і вік,
//
//     імʼя повинно бути більше за 3 символи, вік – не менше нуля
//
// На гет, пут, деліт юзерів перевірити чи такий юзер є в базі.
//
//     якщо немає – вивести помилку
//
// Використовуйте шляхи для нових ендпоінтів згідно REST правил

const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];


app.get('/users', (req, res) => {
    try {
           res.status(200).send(users)
        }
     catch(err) {
           res.status(500).send(err.message);
     }
})
app.get('/users/:userId', (req, res) => {
    try {
    const userId = Number(req.params.userId);
    const user = users.find(user => user.id === userId);
    if (!user) {
       res.status(404).send({'error': 'User Not Found'});
    }
        console.log(req.params);
        res.status(200).send(user);

    } catch(err) {
        res.status(500).send(err.message);
    }
});

app.post('/users', (req, res) => {
    try {
         const {name, age, status} = req.body;

         // to do validation

        if (!name || name.length < 3) {
            res.status(400).send({ error: 'Name must be at least 3 symbols' });
        }

        if (age === undefined || age < 0) {
            return res.status(400).send({ error: 'Age must be min 3 symbols' });
        }

        const id = users[users.length - 1].id + 1;
        const newUser = {id,name, age, status};
        users.push(newUser);
        res.status(201).send(newUser)
        console.log(users)

    }    catch(e) {
         res.status(500).send(e.message);
    }
})

app.put('/users/:userId', (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            res.status(404).json({ error: 'User not found' });
        }

        const { name, age, status } = req.body;

        if (!name || name.length < 3 || age < 0) {
              res.status(400).json({ error: 'Invalid validation data' });
        }
        users[userIndex] = { ...users[userIndex], name, age, status };
        res.status(201).json(users[userIndex]);
        console.log(users);

    } catch (err) {
        res.status(500).json(err.message);
    }
});


app.patch('/users/:userId', (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
             res.status(404).json( 'User Not Found');
        }


        users[userIndex] = { ...users[userIndex], ...req.body };

        res.status(200).json(users[userIndex]);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

app.delete('/users/:userId', (req, res) => {
    try {
        const userId = Number(req.params.userId)
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            res.status(404).send('User not found');
        }
             users.splice(userIndex, 1);
             res.status(204).send(users)
    } catch (e) {
             res.status(500).send(e.message);
    }
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})