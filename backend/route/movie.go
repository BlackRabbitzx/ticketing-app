package route

import (
	"github.com/BlackRabbitzx/ticketing-app/backend/controller"
	"github.com/gin-gonic/gin"
)

func SetupMovieRoutes(router *gin.Engine) {
	router.POST("/get-movie", controller.GetMovies)
	router.POST("/get-movie-by-id", controller.GetMovieByID)
	router.POST("/create-movie", controller.CreateMovie)
	
}