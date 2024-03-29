users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

function userLanguages(user){
    str = ''
    for(var i=0;i<users.length;i++){
        str += user[i].fname + ' ' + user[i].lname + ' knows ';
        for(var y=0;y<user[i].languages.length;y++)
            if(y < user[i].languages.length -1){
                str += user[i].languages[y] + ', '
            }
            else{
                str += 'and ' + user[i].languages[y] + '.\n'
            }
    }
return str;
}

console.log(userLanguages(users));

  