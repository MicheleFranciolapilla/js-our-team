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
  const colors = ["red","green","purple","gray","yellow","orange"]; 


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

  function dom_output()
  {
    let main = document.querySelector("main");
    main.innerHTML = '<h2 style="color: blue;">This is our team...</h2>';
    for (let i = 0; i < team.length; i++)
    {
      let member = document.createElement("ul");
      member.setAttribute("style",`color:${colors[i]}`);
      for (key in team[i])
      {
        let member_data = document.createElement("li");
        member_data.innerText = `${key}: ${team[i][key]}`;
        member.append(member_data);
      }
      main.append(member);
    }
  }

  function dom_img_output()
  {
    let main = document.querySelector("main");
    main.innerHTML = '<h2 style="color: blue; text-align: center; position: fixed; top: 0; left: 0; right: 0;">This is our team...</h2>';
    let outer_box = document.createElement("div");
    outer_box.setAttribute("style","display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 30px; padding: 50px;");
    main.append(outer_box);
    for (let i = 0; i < team.length; i++)
    {
      let member_box = document.createElement("div");
      member_box.setAttribute("style",`background-color: ${colors[i]}; flex-basis: calc(90% / 3); aspect-ratio: 0.75; border: 3px solid black; text-align: center;`);
      let image_box = document.createElement("img");
      image_box.setAttribute("src",team[i].image);
      image_box.setAttribute("style","margin: 10px 0; object-fit: contain;");
      member_box.append(image_box);
      member_box.innerHTML += `<h4 style="color: black;">Name: ${team[i].name}</h4>`;
      member_box.innerHTML += `<h5 style="color: white;">Role: ${team[i].role}</h5>`;
      outer_box.append(member_box);
    }
  }

  image_path();
  console_output();
  // dom_output();
  dom_img_output();