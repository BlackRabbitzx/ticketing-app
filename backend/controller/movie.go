package controller

import (
	"fmt"
	"os"
	"time"

	"github.com/BlackRabbitzx/ticketing-app/backend/config"
	"github.com/BlackRabbitzx/ticketing-app/backend/model"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

func Createmovie(c *gin.Context) {

	var movie model.Movie
	c.ShouldBindJSON(&movie)
	config.DB.Create(&movie)
	c.JSON(200, &movie)

}

func GetMovies(c *gin.Context) {

	type RequestBody struct {
		ShopID          int    `json:"shop_id"`
		PageNumber      int    `json:"page_number"`
		IsAvailableOnly bool   `json:"is_available_only"`
		Keyword         string `json:"keyword"`
		InnerKeyword    string `json:"inner_keyword"`
	}

	var requestBody RequestBody
	c.ShouldBindJSON(&requestBody)

	pageSize := 50

	var count int64
	rawMovies := []model.Movie{}
	if requestBody.IsAvailableOnly {

		config.DB.Model(model.Movie{}).Where("shop_id = ?", requestBody.ShopID).Where("movie_stock > 0").Where("movie_name ILIKE ?", "%"+requestBody.Keyword+"%").Where("movie_name ILIKE ?", "%"+requestBody.InnerKeyword+"%").Limit(pageSize).Offset((requestBody.PageNumber - 1) * pageSize).Find(&rawMovies)

		config.DB.Model(model.Movie{}).Where("shop_id = ?", requestBody.ShopID).Where("movie_stock > 0").Where("movie_name ILIKE ?", "%"+requestBody.Keyword+"%").Where("movie_name ILIKE ?", "%"+requestBody.InnerKeyword+"%").Count(&count)

	} else {

		config.DB.Model(model.Movie{}).Where("shop_id = ?", requestBody.ShopID).Where("movie_name ILIKE ?", "%"+requestBody.Keyword+"%").Where("movie_name ILIKE ?", "%"+requestBody.InnerKeyword+"%").Limit(pageSize).Offset((requestBody.PageNumber - 1) * pageSize).Find(&rawMovies)

		config.DB.Model(model.Movie{}).Where("shop_id = ?", requestBody.ShopID).Where("movie_name ILIKE ?", "%"+requestBody.Keyword+"%").Where("movie_name ILIKE ?", "%"+requestBody.InnerKeyword+"%").Count(&count)

	}

	type Movie struct {
		MovieID         string        `json:"movie_id"`
		Title           string        `json:"title"`
		Genre           string        `json:"genre"`
		ReleaseDate     time.Time     `json:"release_date"`
		Duration        time.Duration `json:"duration"`
		Description     string        `json:"description"`
		MovieImageLinks []string      `json:"movie_image_link"`
	}

	length := len(rawMovies)
	var parsedMovies []Movie

	for i := 0; i < length; i++ {

		var movie Movie
		movie.MovieID = rawMovies[i].MovieID
		movie.Title = rawMovies[i].Title
		movie.Genre = rawMovies[i].Genre
		movie.ReleaseDate = rawMovies[i].ReleaseDate
		movie.Duration = rawMovies[i].Duration
		movie.Description = rawMovies[i].Description

		// Get ALl Image Links
		var movieImageLinks []model.MovieImageLink
		config.DB.Model(model.MovieImageLink{}).Where("movie_id = ?", movie.MovieID).Find(&movieImageLinks)

		var imageLinks []string
		movieImageLinksLength := len(movieImageLinks)
		for j := 0; j < movieImageLinksLength; j++ {

			imageLinks = append(imageLinks, movieImageLinks[j].Link)

		}
		movie.MovieImageLinks = imageLinks

		parsedMovies = append(parsedMovies, movie)

	}

	type ResponseBody struct {
		ParsedMovies []Movie `json:"movies"`
		Count        int64   `json:"count"`
	}

	var response ResponseBody
	response.ParsedMovies = parsedMovies
	response.Count = count

	c.JSON(200, &response)

}

func GetMovieByID(c *gin.Context) {

	type RequestBody struct {
		MovieID string `json:"movie_id"`
	}

	var requestBody RequestBody
	c.ShouldBindJSON(&requestBody)

	var rawMovie model.Movie
	config.DB.First(&rawMovie, "movie_id = ?", requestBody.MovieID)

	if rawMovie.ID == 0 {
		c.String(200, "Movie Not Found")
		return
	}

	type Movie struct {
		MovieID         string        `json:"movie_id"`
		Title           string        `json:"title"`
		Genre           string        `json:"genre"`
		ReleaseDate     time.Time     `json:"release_date"`
		Duration        time.Duration `json:"duration"`
		Description     string        `json:"description"`
		MovieImageLinks []string      `json:"movie_image_link"`
	}

	var movie Movie
	movie.MovieID = rawMovie.MovieID
	movie.Title = rawMovie.Title
	movie.Genre = rawMovie.Genre
	movie.ReleaseDate = rawMovie.ReleaseDate
	movie.Duration = rawMovie.Duration
	movie.Description = rawMovie.Description

	// Get ALl Image Links
	var movieImageLinks []model.MovieImageLink
	config.DB.Model(model.MovieImageLink{}).Where("movie_id = ?", movie.MovieID).Find(&movieImageLinks)

	var imageLinks []string
	movieImageLinksLength := len(movieImageLinks)
	for j := 0; j < movieImageLinksLength; j++ {

		imageLinks = append(imageLinks, movieImageLinks[j].Link)

	}
	movie.MovieImageLinks = imageLinks

	c.JSON(200, movie)

}

func UpdateMovie(c *gin.Context) {

	type RequestBody struct {
		Token string      `json:"token"`
		Movie model.Movie `json:"movie"`
	}

	var requestBody RequestBody
	c.ShouldBindJSON(&requestBody)

	tokenString := requestBody.Token
	result, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {

		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(os.Getenv("SECRET")), nil

	})

	if err != nil {
		c.String(200, "Token Parsing Failed")
		return
	}

	if claims, ok := result.Claims.(jwt.MapClaims); ok && result.Valid {

		if float64(time.Now().Unix()) > claims["expire"].(float64) {

			c.String(200, "Cookie Expired")
			return

		}

		var movie model.Movie
		config.DB.Model(&model.Movie{}).Where("movie_id = ?", requestBody.Movie.MovieID).First(&movie)

	}

}

func SearchMovie(c *gin.Context) {

	type RequestBody struct {
		Keyword         string `json:"keyword"`
		InnerKeyword    string `json:"inner_keyword"`
		PageNumber      int    `json:"page_number"`
		IsAvailableOnly bool   `json:"is_available_only"`
	}

	var requestBody RequestBody
	c.ShouldBindJSON(&requestBody)

	pageSize := 50

	rawMovies := []model.Movie{}

	if requestBody.IsAvailableOnly {

		config.DB.Model(model.Movie{}).Where("movie_name ILIKE ?", "%"+requestBody.Keyword+"%").Where("movie_name ILIKE ?", "%"+requestBody.InnerKeyword+"%").Where("movie_stock > 0").Limit(pageSize).Offset((requestBody.PageNumber - 1) * pageSize).Find(&rawMovies)

	} else {

		config.DB.Model(model.Movie{}).Where("movie_name ILIKE ?", "%"+requestBody.Keyword+"%").Where("movie_name ILIKE ?", "%"+requestBody.InnerKeyword+"%").Limit(pageSize).Offset((requestBody.PageNumber - 1) * pageSize).Find(&rawMovies)

	}

	type Movie struct {
		MovieID         string        `json:"movie_id"`
		Title           string        `json:"title"`
		Genre           string        `json:"genre"`
		ReleaseDate     time.Time     `json:"release_date"`
		Duration        time.Duration `json:"duration"`
		Description     string        `json:"description"`
		MovieImageLinks []string      `json:"movie_image_link"`
	}

	length := len(rawMovies)
	var parsedMovies []Movie

	for i := 0; i < length; i++ {

		var movie Movie
		movie.MovieID = rawMovies[i].MovieID
		movie.Title = rawMovies[i].Title
		movie.Genre = rawMovies[i].Genre
		movie.ReleaseDate = rawMovies[i].ReleaseDate
		movie.Duration = rawMovies[i].Duration
		movie.Description = rawMovies[i].Description

		// Get ALl Image Links
		var movieImageLinks []model.MovieImageLink
		config.DB.Model(model.MovieImageLink{}).Where("movie_id = ?", movie.MovieID).Find(&movieImageLinks)

		var imageLinks []string
		movieImageLinksLength := len(movieImageLinks)
		for j := 0; j < movieImageLinksLength; j++ {

			imageLinks = append(imageLinks, movieImageLinks[j].Link)

		}
		movie.MovieImageLinks = imageLinks

		parsedMovies = append(parsedMovies, movie)

	}

	c.JSON(200, &parsedMovies)

}

func GetRecommendedMovies(c *gin.Context) {

	type RequestBody struct {
		BatchNumber int `json:"batch_number"`
	}
	var requestBody RequestBody

	c.ShouldBindJSON(&requestBody)

	if requestBody.BatchNumber >= 4 {
		return
	}

	batchSize := 8

	var rawMovies []model.Movie
	config.DB.Model(model.Movie{}).Order("movie_stock DESC").Limit(batchSize).Offset(batchSize * (requestBody.BatchNumber - 1)).Find(&rawMovies)

	type Movie struct {
		MovieID         string        `json:"movie_id"`
		Title           string        `json:"title"`
		Genre           string        `json:"genre"`
		ReleaseDate     time.Time     `json:"release_date"`
		Duration        time.Duration `json:"duration"`
		Description     string        `json:"description"`
		MovieImageLinks []string      `json:"movie_image_link"`
	}
	var parsedMovies []Movie

	length := len(rawMovies)
	for i := 0; i < length; i++ {

		var movie Movie
		movie.MovieID = rawMovies[i].MovieID
		movie.Title = rawMovies[i].Title
		movie.Genre = rawMovies[i].Genre
		movie.ReleaseDate = rawMovies[i].ReleaseDate
		movie.Duration = rawMovies[i].Duration
		movie.Description = rawMovies[i].Description

		var movieImageLinks []model.MovieImageLink
		config.DB.Model(model.MovieImageLink{}).Where("movie_id = ?", movie.MovieID).Find(&movieImageLinks)

		var imageLinks []string
		movieImageLinksLength := len(movieImageLinks)
		for j := 0; j < movieImageLinksLength; j++ {

			imageLinks = append(imageLinks, movieImageLinks[j].Link)

		}
		movie.MovieImageLinks = imageLinks

		parsedMovies = append(parsedMovies, movie)

	}

	c.JSON(200, parsedMovies)

}

func GetRecommendedMoviesByShop(c *gin.Context) {

	type RequestBody struct {
		ShopID int `json:"shop_id"`
	}
	var requestBody RequestBody

	c.ShouldBindJSON(&requestBody)

	batchSize := 8

	var rawMovies []model.Movie
	config.DB.Model(model.Movie{}).Where("shop_id = ?", requestBody.ShopID).Order("movie_stock DESC").Limit(batchSize).Find(&rawMovies)

	type Movie struct {
		MovieID         string        `json:"movie_id"`
		Title           string        `json:"title"`
		Genre           string        `json:"genre"`
		ReleaseDate     time.Time     `json:"release_date"`
		Duration        time.Duration `json:"duration"`
		Description     string        `json:"description"`
		MovieImageLinks []string      `json:"movie_image_link"`
	}
	var parsedMovies []Movie

	length := len(rawMovies)
	for i := 0; i < length; i++ {

		var movie Movie
		movie.MovieID = rawMovies[i].MovieID
		movie.Title = rawMovies[i].Title
		movie.Genre = rawMovies[i].Genre
		movie.ReleaseDate = rawMovies[i].ReleaseDate
		movie.Duration = rawMovies[i].Duration
		movie.Description = rawMovies[i].Description

		var movieImageLinks []model.MovieImageLink
		config.DB.Model(model.MovieImageLink{}).Where("movie_id = ?", movie.MovieID).Find(&movieImageLinks)

		var imageLinks []string
		movieImageLinksLength := len(movieImageLinks)
		for j := 0; j < movieImageLinksLength; j++ {

			imageLinks = append(imageLinks, movieImageLinks[j].Link)

		}
		movie.MovieImageLinks = imageLinks

		parsedMovies = append(parsedMovies, movie)

	}

	c.JSON(200, parsedMovies)

}
