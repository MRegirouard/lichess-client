class Challenges
{
  constructor(client)
  {
    this._client = client
  }

  create(username, options = {})
  {
    return this._makeChallenge(`${username}`, options)
  }

  accept(challengeId, options = {})
  {
    return this._makeChallenge(`${challengeId}/accept`, options)
  }

  decline(challengeId, options = {})
  {
    return this._makeChallenge(`${challengeId}/decline`, options)
  }

  challengeAI(level, options = {})
  {
    const path = 'api/challenge/ai'

    const body = {
      level: level
    }

    const headers = {
      'Content-type': 'application/json',
    }

    return this._client.post(path, headers, JSON.stringify(body), options)
  }

  openChallenge(options = {})
  {
    return this._makeChallenge('open', options)
  }

  _makeChallenge(path, options = {})
  {
    const fullPath = 'api/challenge/' + path

    return this._client.post(fullPath, {}, null, options)
  }
}

module.exports = Challenges