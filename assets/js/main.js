const img_folder = "assets/img/";
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  function image_path()
  {
    for (let i = 0; i < team.length; i++)
    {
      team[i].image = img_folder.concat(team[i].image);
    }
  }

  function console_output()
  {
    console.log("Our team:");
    console.log("********************");
    console.log("--------------------");
    for (let i = 0; i < team.length; i++)
    {
        console.log("Nr ",i + 1);
        for (key in team[i])
        {
            console.log(key,": ",team[i][key]);
        } 
        console.log("--------------------");
    }
    console.log("********************");
  }

  image_path();
  console_output();