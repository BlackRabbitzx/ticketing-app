package route

import (
	"github.com/BlackRabbitzx/ticketing-app/backend/controller"
	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {

	router.POST("/signup", controller.InsertUser)
	router.POST("/signin", controller.SignIn)
}
