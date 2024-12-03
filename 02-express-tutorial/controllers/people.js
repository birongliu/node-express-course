function getPeople(req, res) {
    res.json(people);
}
function addPerson(req, res) {
    if (!req.body.name) {
        return res.status(400).json({ success: false, msg: "please provide name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, data: req.body.name });
}
function updatePersonById(req, res) {
    const name = req.body.name;
    if(!name) {
        return res.status(400).json({ success: false, msg: "please provide name" });
    }
    const id = req.params.id;
    const person = people.find((person) => person.id === Number(id));
    if(!person) {
        return res.status(404).json({ success: false, msg: "person not found" });
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
}


function deletePersonById(req, res) {
    //delete person
    const id = req.params.id;
    if(!id) {
        return res.status(400).json({ success: false, msg: "please provide id" });
    }
    const person = people.find((person) => person.id === Number(id));
    if(!person) {
        return res.status(404).json({ success: false, msg: "person not found" });
    }
    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: newPeople });
}

function getPersonById(id) {
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: "person not found" });
    }
    res.status(200).json({ success: true, data: person });
}

module.exports = { getPeople, addPerson, getPersonById, updatePersonById, deletePersonById };