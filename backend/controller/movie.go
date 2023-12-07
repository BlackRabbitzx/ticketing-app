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

func GetProducts(c *gin.Context) {

	type RequestBody struct {
		MovieID         int    `json:"shop_id"`
		PageNumber      int    `json:"page_number"`
		IsAvailableOnly bool   `json:"is_available_only"`
		Keyword         string `json:"keyword"`
		InnerKeyword    string `json:"inner_keyword"`
	}

	var requestBody RequestBody
	c.ShouldBindJSON(&requestBody)

	type Movie struct {
		MovieID     string `json:"movie_id" gorm:"primary_key"`
		Title       string `json:"title"`
		Genre       string `json:"genre"`
		ReleaseDate string `json:"release_date"`
		Duration    string `json:"duration"`
		Description string `json:"description"`
		ImageURL    string `json:"image_url"`
	}

	length := len(rawProducts)
	var parsedProducts []Product

	for i := 0; i < length; i++ {

		var product Product
		product.ProductID = rawProducts[i].ProductID
		product.ShopID = rawProducts[i].ShopID
		product.ProductCategoryID = rawProducts[i].ProductCategoryID
		product.ProductName = rawProducts[i].ProductName
		product.ProductDescription = rawProducts[i].ProductDescription
		product.ProductPrice = rawProducts[i].ProductPrice
		product.ProductStock = rawProducts[i].ProductStock
		product.ProductDetails = rawProducts[i].ProductDetails

		// Get ALl Image Links
		var productImageLinks []model.ProductImageLink
		config.DB.Model(model.ProductImageLink{}).Where("product_id = ?", product.ProductID).Find(&productImageLinks)

		var imageLinks []string
		productImageLinksLength := len(productImageLinks)
		for j := 0; j < productImageLinksLength; j++ {

			imageLinks = append(imageLinks, productImageLinks[j].Link)

		}
		product.ProductImageLinks = imageLinks

		parsedProducts = append(parsedProducts, product)

	}

	type ResponseBody struct {
		ParsedProducts []Product `json:"products"`
		Count          int64     `json:"count"`
	}

	var response ResponseBody
	response.ParsedProducts = parsedProducts
	response.Count = count

	c.JSON(200, &response)

}
