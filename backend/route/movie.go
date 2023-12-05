package route

import (
	"github.com/BlackRabbitzx/ticketing-app/backend/controller"
	"github.com/gin-gonic/gin"
)

func ProductRoute(router *gin.Engine) {

	router.POST("/create-product", controller.Createmovie)
	router.POST("/get-products", controller.GetMovies)
	router.POST("/get-product-by-id", controller.GetMovieByID)
	router.POST("/update-product", controller.UpdateMovie)
	router.POST("/search-product", controller.SearchMovie)

	router.POST("/get-recommended-products", controller.GetRecommendedMovies)
	router.POST("/get-recommended-products-by-shop", controller.GetRecommendedMoviesByShop)

}
