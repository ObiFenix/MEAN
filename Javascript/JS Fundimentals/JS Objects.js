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


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 }; 

 function empManagers(list) {
     console.log('EMPLOYEES');     
     for (let index = 0; index < list['employees'].length; index++) {
        console.log(index+1+' - ' +list['employees'][index].first_name+ ', '+list['employees'][index].last_name);
     }
     console.log('MANAGERS');
     for (let index = 0; index < list['managers'].length; index++) {
        console.log(index+1+' - ' +list['managers'][index].first_name+ ', '+list['managers'][index].last_name);   
     }
 }
 empManagers(users)