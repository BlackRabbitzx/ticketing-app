package main

import (
	"fmt"
	"net/http"

	"github.com/BlackRabbitzx/ticketing-app/backend/config"
	"github.com/BlackRabbitzx/ticketing-app/backend/route"
	"github.com/gin-gonic/gin"
	"github.com/rs/cors"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.New()

	opts := cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
	}

	handler := cors.New(opts).Handler(router)

	config.Connect()
	route.UserRoute(router)
	route.SetupMovieRoutes(router)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello from Golang Backend!")
	})

	fmt.Println("Server is running on :8080")
	http.ListenAndServe(":8080", handler)
}
