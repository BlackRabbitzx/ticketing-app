package route

import (
	"github.com/BlackRabbitzx/ticketing-app/backend/controller"
	"github.com/gin-gonic/gin"
)

func SetupMovieRoutes(router *gin.RouterGroup) {
	movieGroup := router.Group("/movies")
	{
		movieGroup.GET("/Movie", controller.GetMovies)
		movieGroup.POST("/Movie", controller.CreateMovie)
	}
}