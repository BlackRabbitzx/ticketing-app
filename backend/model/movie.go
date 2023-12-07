package model

import (
	"gorm.io/gorm"
)

type Movie struct {
	gorm.Model
	CinemaID    int `json:"cinema_id"`
	MovieID     int `json:"movie_id" gorm:"primary_key"`
	Title       string `json:"title"`
	Genre       string `json:"genre"`
	ReleaseDate string `json:"release_date"`
	Duration    string `json:"duration"`
	Description string `json:"description"`
	ImageURL    string `json:"image_url"`
}
