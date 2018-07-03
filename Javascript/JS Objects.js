let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function namesCohorts(list) {
    
    for (let i = 0; i < list.length; i++) {
        console.log('Name: ' +students[i].name+ ', Cohort: '+students[i].cohort);
        
    }
}

namesCohorts(students);
