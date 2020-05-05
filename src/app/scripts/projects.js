class Projects {
  constructor() {
    this._githubReadOnlyToken = `e02f96aeb8bb34bfa5ef20d3b7dcee6f57219acd`
    this._queryPinnedRepos = `
    {
      repositoryOwner(login: "twistezo") {
        ... on User {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
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
      .then(response => {
        if (response.status !== 200)
          throw Error('Failed to connect GitHub. Status ' + response.status)
        return response.json()
      })
      .then(data => this._unwrapData(data))
      .then(unwrappedData => this._insertDataToDOM(unwrappedData))
      .catch(error => this._insertErrorToDOM(error))
  }

  _unwrapData = data => {
    if (data === undefined) {
      throw Error('Failed to unwrap data from GitHub API.')
    }

    let unwrappedData = []
    const repositoriesArray = data.data.repositoryOwner.pinnedItems.nodes

    repositoriesArray.forEach(repository => {
      const repositoryNodeObject = repository.object
      const parsedTools = this._parseTools(repository.object.text)
      const tools =
        repositoryNodeObject === null || parsedTools === null
          ? ''
          : this._parseTools(repository.object.text)

      unwrappedData.push({
        name: repository.name,
        description: repository.description,
        tools,
        url: repository.url
      })
    })
    return unwrappedData
  }

  // Match and return only one line after 'Tools' from 'readme.md' files
  _parseTools = rawData => {
    // eslint-disable-next-line no-control-regex
    const data = new RegExp('Tools\n\n(.*)').exec(rawData)
    if (data === null) {
      throw Error('Failed to parse data from GitHub API.')
    }
    return data[1]
  }

  _insertDataToDOM = data => {
    if (!Array.isArray(data)) {
      throw Error('Failed to insert fetched data to DOM.')
    }

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
      updatedCards[i].querySelector('.card-text').innerHTML = data[i].description

      // convert string ex. `java, spring` to `#java #spring`
      data[i].tools
        .split(',')
        .map(word => word.trim().toLowerCase())
        .forEach(tool => {
          let hashSpan = document.createElement('span')
          hashSpan.classList.add('highlighted')
          hashSpan.innerText = '#'
          updatedCards[i].querySelector('.tools').appendChild(hashSpan)

          let toolSpan = document.createElement('span')
          toolSpan.classList.add('pr-2')
          toolSpan.innerText = tool
          updatedCards[i].querySelector('.tools').appendChild(toolSpan)
        })

      // updatedCards[i].querySelector('.stack').innerHTML = tools
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

  _insertErrorToDOM = error => {
    const cards = document.getElementsByClassName('cards')[0]
    // remove previously prepared `card` DOM element
    while (cards.firstChild) {
      cards.removeChild(cards.firstChild)
    }

    let p0 = document.createElement('p')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    p0.innerText = 'Ups...'
    p1.innerText = error
    p2.innerText = 'Try to reload this page.'
    cards.appendChild(p0)
    cards.appendChild(p1)
    cards.appendChild(p2)
  }
}

export default Projects
