const express = require('express');
const app = express();
const employees = [
    {
        "id": 1,
        "name": "Chris Bridges",
        "salary": "100,000",
        "department": "Electronics"
    },
    {
        "id": 2,
        "name": " D'Glester Hardunkichud ",
        "salary": "12,000,000",
        "department": "Talent Relations"
    },
    {
        "id": 3,
        "name": "Vincent McMahon",
        "salary": "30,000,000",
        "department": "Talent"
    },
    {
        "id": 4,
        "name": "Brian Griffin",
        "salary": "1,000,000",
        "department": "Accounting"
    },
    {
        "id": 5,
        "name": "Justin McNizzle",
        "salary": "400,000",
        "department": "Education"
    },
    {
        "id": 6,
        "name": "LeBanon James ",
        "salary": "500,000",
        "department": "Sanitation"
    },
    {
        "id": 7,
        "name": "Kanye East",
        "salary": "200,000",
        "department": "Business"
    },
    {
        "id": 8,
        "name": "Pre Malone",
        "salary": "100,000",
        "department": "IT"
    },
    {
        "id": 9,
        "name": "Fatima Cruz ",
        "salary": "50,000",
        "department": "Web Dev"
    },
    {
        "id": 10,
        "name": "Alphonse Magdeleno",
        "salary": "30,000",
        "department": "Talent"
    }
];
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/api/employees', (req, res) => {
    res.send(employees);
});
app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) res.status(404).send('The employee was not found');
    res.send(employee);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));












