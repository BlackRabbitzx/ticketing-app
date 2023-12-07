package model

import "gorm.io/gorm"

type MovieImageLink struct {
	gorm.Model
	MovieID string `json:"product_id" gorm:"References:movies(movie_id)"`
	Link    string `json:"link"`
}
