import API_ENDPOINT from '../globals/api-endpoint'

class QuotesDbSource {
  static async homePage () {
    const response = await fetch(API_ENDPOINT.HOMEPAGE)
    const responseJson = await response.json()
    return responseJson.results
  }
}

export default QuotesDbSource
