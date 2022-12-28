const screen = {
    userProfile:  document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">

                 <img src="${user.avatarUrl}" alt="Foto do perfil do usuario" /> 
                   
                                            
                     <div class="data">
                         <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                         <p>${user.bio ?? 'Não possui bio cadastrado 😥'}</p>
                     </div>
                 </div>
                 
                 <div class="info">

                 <p>Seguidores: ${user.followers}  Seguindo: ${user.following}</p>

                 </div>
                 `
                 
        

        let repositoriesItens = ''
            user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">${repo.name}
                                                <div class ="icon-container">
                                                <div class="icon">🍴 ${repo.forks_count}</div>
                                                <div class="icon">⭐ ${repo.stargazers_count}</div>
                                                <div class="icon">👀 ${repo.watchers_count}</div>
                                                <div class="icon">👩‍💻 ${repo.language ?? ''}</div>
                                            </div>
                                        
                                        </a></li>`

        })
            
        


        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositorios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }





        
        let eventsItens = user.events.filter(event => event.type === "PushEvent" || event.type === "CreateEvent");
        console.log(eventsItens)
        
        let eventsList = ""

            eventsItens.forEach(event => {
                    if(event.payload.commits){
                        eventsList += `<li>${event.repo.name} - <span>${event.payload.commits[0].message}</span></li>`                           
                    }



            })


            if(user.events.length > 0){
                this.userProfile.innerHTML += `<div class="events">
                                                <h2>eventos</h2>
                                                <ul>${eventsList}</ul>
                                                </div>`
            }
        
    
        
},

renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
}

}

export { screen }