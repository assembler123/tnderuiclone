let counter = 0;
let fig = [
        {
            name: "Ramu A",
            age: 26,
            descr: {
                desig: "IT expert",
                co: "buyeronhire",
                bio: "So grateful to be sharing my world with you."
            },
            away: "5 KM Away",
            state: "Delhi",
            img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
        }, {
            name: "Binod Singh",
            age: 21,

            descr: {
                desig: "Developer",
                co: "Facebook",
                bio: "So many of my smiles are because of you"
            },
            away: "2 KM Away",
            state: "Delhi",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }, {
            name: "John",
            age: 32,

            descr: {
                desig: "B.Tech",
                co: "JIIT",
                bio: "Bio Padhni hai to PCMB le"
            },
            away: "5 KM Away",
            state: "Delhi",
            img: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }
    ];
    next();
    document.getElementById('like').addEventListener("click", function () {
        counter += 1;

        next();
    })
    function next() {
        document.getElementById('cont').innerHTML = '<div class="cont-card">'+oneCard(counter)+'</div>'; 
    }
    function oneCard(counter)
    {
      return `
        <div class='one-card'>
<div class='imgcon'>
  <img class='imgd' src=${
            fig[counter].img
        }>
</div>
<div class='desc-name'>
  <h3>${
            fig[counter].name
        }, ${
            fig[counter].age
        } </h3>
</div>
<div class='desc-job'>
  <p>${
            fig[counter].descr.desig
        } at ${
            fig[counter].descr.co
        }</p>
<p>${
            fig[counter].state
        }</p>
<p>${
            fig[counter].away
        }</p>
</div>
<div class='desc-bio'>
<p>${
            fig[counter].descr.bio
        }</p></div>
        </div></div>
        `
    }