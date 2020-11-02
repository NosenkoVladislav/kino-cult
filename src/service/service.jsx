export default class Service {
  _apiUrl = "http://localhost:5000";
  // _apiUrl = "https://apinode.suspilne.media";

  async getMovies() {
    const response = await fetch(this._apiUrl + "/movies");
    if (!response.ok) {
      throw new Error(
        `Could not get ${this._apiUrl + "/movies"}, received ${response.status}`
      );
    }
    const result = await response.json();
    return result;
  }

  async getMovie(id) {
    const response = await fetch(this._apiUrl + `/movies/${id}`);
    if (!response.ok) {
      throw new Error(
        `Could not get ${this._apiUrl + "/movies"}, received ${response.status}`
      );
    }
    const result = await response.json();
    return result;
  }

  async getMovieRating(id, userId) {
    const response = await fetch(
      this._apiUrl + `/rating/${id + "/" + userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        `Could not get ${
          this._apiUrl + "/rating/" + id + "/" + userId
        }, received ${response.status}`
      );
    }
    const result = await response.json();
    if (result) {
      return result.userRating;
    } else {
      return null;
    }
  }

  async setMovieRating(id, data, rating, movieName) {
    const response = await fetch(this._apiUrl + "/rating/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        userID: data.userID,
        movieName: movieName
      }),
    });
    if (!response.ok) {
      throw new Error(
        `Could not get ${this._apiUrl + "/rating/" + id}, received ${
          response.status
        }`
      );
    }
    const result = await response.json();
    return result;
  }

  async getImages() {
    const response = await fetch(this._apiUrl + "/images");
    if (!response.ok) {
      throw new Error(
        `Could not get ${this._apiUrl + "/images"}, received ${response.status}`
      );
    }
    const result = await response.json();
    return result;
  }
}
