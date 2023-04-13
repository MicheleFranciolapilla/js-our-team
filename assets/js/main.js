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

  // Funzione Milestone 1
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

  // Funzione Milestone 2
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

  // Funzione Bonus 1
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

  // Funzione Bonus 2
  function bootstrap_card_output()
  {
    let main = document.querySelector("main");
    main.className = "col-9 mx-auto";
    main.innerHTML = '<h1 class="text-center text-black">This is our team...</h1>';
    main.innerHTML += '<p class="text-center text-black-50 mx-5 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde necessitatibus quidem eum perferendis vitae? Incidunt asperiores eos ipsam iure corporis illo illum aperiam voluptas. Maiores voluptatem magni obcaecati neque.</p>';
    let cards_row = document.createElement("div");
    cards_row.className = "row flex-wrap justify-content-evenly";
    main.append(cards_row);
    for (let i = 0; i < team.length; i++)
    {
      let member_card = document.createElement("div");
      member_card.classList.add("card", "my-2");
      member_card.setAttribute("style",`flex-basis: calc(95% / 3); padding-top: 20px;`);
      member_card.innerHTML = `
      <img src="${team[i]['image']}" class="card-img-top" alt="Foto nr ${i + 1}">
      <div class="card-body text-center">
        <h3 class="card-title">${team[i]['name']}</h3>
        <h5 class="card-text">${team[i]['role']}</h5>
        <a href="#" class="btn btn-primary">Vai al suo profilo linkedin</a>
      </div>`;
      cards_row.append(member_card);
    }
  }

  image_path();
  console_output();
  // dom_output();
  // dom_img_output();
  bootstrap_card_output();