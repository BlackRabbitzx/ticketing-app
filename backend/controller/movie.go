package controller

import (
	"github.com/BlackRabbitzx/ticketing-app/backend/config"
	"github.com/BlackRabbitzx/ticketing-app/backend/model"
	"github.com/gin-gonic/gin"
)

func CreateMovie(c *gin.Context) {

	var movie model.Movie
	c.ShouldBindJSON(&movie)
	config.DB.Create(&movie)
	c.JSON(200, &movie)
}

func GetMovies(c *gin.Context) {

	type RequestBody struct {
		CinemaID        int    `json:"cinema_id"`
		PageNumber      int    `json:"page_number"`
		IsAvailableOnly bool   `json:"is_available_only"`
		Keyword         string `json:"keyword"`
		InnerKeyword    string `json:"inner_keyword"`
	}

	var requestBody RequestBody
	c.ShouldBindJSON(&requestBody)

	pageSize := 50

	var count int64
	rawProducts := []model.Movie{}

	config.DB.Model(model.Movie{}).Where("cinema_id = ?", requestBody.CinemaID).Limit(pageSize).Find(&rawProducts)

	// config.DB.Model(model.Movie{}).Where("cinema_id = ?", requestBody.CinemaID).Count(&count)

	// if requestBody.IsAvailableOnly {

	// 	config.DB.Model(model.Movie{}).Where("cinema_id = ?", requestBody.CinemaID).Where("title ILIKE ?", "%"+requestBody.Keyword+"%").Where("title ILIKE ?", "%"+requestBody.InnerKeyword+"%").Limit(pageSize).Offset((requestBody.PageNumber - 1) * pageSize).Find(&rawProducts)

	// 	config.DB.Model(model.Movie{}).Where("cinema_id = ?", requestBody.CinemaID).Where("title ILIKE ?", "%"+requestBody.Keyword+"%").Where("title ILIKE ?", "%"+requestBody.InnerKeyword+"%").Count(&count)

	// } else {

	// 	config.DB.Model(model.Movie{}).Where("movie_id = ?", requestBody.CinemaID).Where("title ILIKE ?", "%"+requestBody.Keyword+"%").Where("title ILIKE ?", "%"+requestBody.InnerKeyword+"%").Limit(pageSize).Offset((requestBody.PageNumber - 1) * pageSize).Find(&rawProducts)

	// 	config.DB.Model(model.Movie{}).Where("movie_id = ?", requestBody.CinemaID).Where("title ILIKE ?", "%"+requestBody.Keyword+"%").Where("title ILIKE ?", "%"+requestBody.InnerKeyword+"%").Count(&count)

	// }

	type Movie struct {
		CinemaID    int    `json:"cinema_id" `
		MovieID     int    `json:"movie_id"`
		Title       string `json:"title"`
		Genre       string `json:"genre"`
		ReleaseDate string `json:"release_date"`
		Duration    string `json:"duration"`
		Description string `json:"description"`
		ImageURL    string `json:"image_url"`
	}

	length := len(rawProducts)
	var parsedProducts []Movie

	for i := 0; i < length; i++ {

		var movie Movie
		movie.MovieID = rawProducts[i].MovieID
		movie.Title = rawProducts[i].Title
		movie.Genre = rawProducts[i].Genre
		movie.ReleaseDate = rawProducts[i].ReleaseDate
		movie.Duration = rawProducts[i].Duration
		movie.Description = rawProducts[i].Description
		movie.ImageURL = rawProducts[i].ImageURL

		parsedProducts = append(parsedProducts, movie)

	}

	type ResponseBody struct {
		ParsedProducts []Movie `json:"movie"`
		Count          int64   `json:"count"`
	}

	var response ResponseBody
	response.ParsedProducts = parsedProducts
	response.Count = count

	c.JSON(200, &response)

}

func GetMovieByID(c *gin.Context) {

	type RequestBody struct {
		MovieID string `json:"movie_id"`
	}

	var requestBody RequestBody
	c.ShouldBindJSON(&requestBody)

	var rawProduct model.Movie
	config.DB.First(&rawProduct, "movie_id = ?", requestBody.MovieID)

	if rawProduct.ID == 0 {
		c.String(200, "Product Not Found")
		return
	}

	type Movie struct {
		CinemaID    int    `json:"cinema_id" `
		MovieID     int    `json:"movie_id"`
		Title       string `json:"title"`
		Genre       string `json:"genre"`
		ReleaseDate string `json:"release_date"`
		Duration    string `json:"duration"`
		Description string `json:"description"`
		ImageURL    string `json:"image_url"`
	}

	var movie Movie
	movie.MovieID = rawProduct.MovieID
	movie.Title = rawProduct.Title
	movie.Genre = rawProduct.Genre
	movie.ReleaseDate = rawProduct.ReleaseDate
	movie.Duration = rawProduct.Duration
	movie.Description = rawProduct.Description
	movie.ImageURL = rawProduct.ImageURL

	c.JSON(200, movie)

}
