package model

import "gorm.io/gorm"

type Cinema struct {
	gorm.Model
	CinemaID string `json:"cinema_id" gorm:"primary_key"`
	Name     string `json:"name" gorm:"unique"`
	Location string `json:"location" gorm:"unique"`
}
