fetch("rk.json")
.then(res =>{
    return res.json();
})
.then(data => {
    data.forEach(user => {
       const name  = `<p>Name: ${user.name}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', name);

       const gender  = `<p>Gender: ${user.gender}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', gender);
       
       const culture  = `<p>Culture: ${user.culture}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', culture);
       
       const born  = `<p> Born: ${user.born}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', born);

       const titles  = `<p> Titles: ${user.titles}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', titles);

       const aliases  = `<p> Aliases: ${user.aliases}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', aliases);

       const books  = `<p>Books: ${user.books}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', books);
    
    });
})


.catch(error => console.log (error));
