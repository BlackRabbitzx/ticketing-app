package model

import (
	"time"

	"gorm.io/gorm"
)

type Movie struct {
	gorm.Model
	MovieID     string        `json:"movie_id" gorm:"primary_key"`
	Title       string        `json:"title"`
	Genre       string        `json:"genre"`
	ReleaseDate time.Time     `json:"release_date"`
	Duration    time.Duration `json:"duration"`
	Description string        `json:"description"`
	ImageURL    string        `json:"image_url"`
}