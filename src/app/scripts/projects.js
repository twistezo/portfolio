class Projects {
  constructor() {
    this._githubReadOnlyToken = `e02f96aeb8bb34bfa5ef20d3b7dcee6f57219acd`
    this._queryPinnedRepos = `
    {
      repositoryOwner(login: "twistezo") {
        ... on User {
          pinnedRepositories(first: 6) {
            edges {
              node {
                object(expression: "master:readme.md") {
                  ... on Blob {
                    text
                  }
                }
                name
                description
                url
              }
            }
          }
        }
      }
    }
    `
  }

  init() {
    this.fetchData()
  }

  fetchData() {
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'bearer ' + this._githubReadOnlyToken
      },
      body: JSON.stringify({
        query: this._queryPinnedRepos
      })
    })
      .then(response => response.json())
      .then(data => this.unwrapData(data))
      .then(unwrappedData => this.insertDataToDOM(unwrappedData))
  }

  unwrapData(data) {
    let unwrappedData = []
    const repositoriesArray = data.data.repositoryOwner.pinnedRepositories.edges
    repositoriesArray.forEach(repository => {
      const repositoryNodeObject = repository.node.object
      const parsedTools = this.parseTools(repository.node.object.text)
      const tools =
        repositoryNodeObject === null || parsedTools === null
          ? ''
          : this.parseTools(repository.node.object.text)
      unwrappedData.push({
        name: repository.node.name,
        description: repository.node.description,
        tools,
        url: repository.node.url
      })
    })
    return unwrappedData
  }

  // Match and return only one line after 'Tools' from 'readme.md' files
  parseTools = rawData => {
    const data = new RegExp('Tools\n\n(.*)').exec(rawData)
    return data !== null ? data[1] : null
  }

  insertDataToDOM(data) {
    // clone template card from card deck
    const cardDeck = document.getElementsByClassName('card-deck')[0]
    let clonedCard = cardDeck.querySelector('.card').cloneNode(true)
    cardDeck.appendChild(clonedCard)

    // clone card decks (with two template cards)
    for (let i = 0; i <= data.length / (data.length / 3) - 2; i++) {
      let cardDeckClone = cardDeck.cloneNode(true)
      document.getElementsByClassName('cards')[0].appendChild(cardDeckClone)
    }

    // fill cards with fetched data
    let updatedCards = document.getElementsByClassName('card')
    for (let i = 0; i < data.length; i++) {
      updatedCards[i].querySelector('.card-title').innerHTML = data[i].name
      updatedCards[i].querySelector('.card-text').innerHTML =
        data[i].description
      updatedCards[i].querySelector('.stack').innerHTML = data[i].tools
      updatedCards[i].querySelector('a').setAttribute('href', data[i].url)
    }

    // add 'aos' to cards
    let aosDelay = 150
    let swap = false
    for (let i = 0; i < updatedCards.length; i++) {
      if (swap) {
        updatedCards[i].setAttribute('data-aos', 'fade-left')
      } else {
        updatedCards[i].setAttribute('data-aos', 'fade-right')
      }
      updatedCards[i].setAttribute('data-aos-delay', aosDelay.toString())
      aosDelay += 50
      swap = !swap
    }
  }
}

export { Projects as default }
